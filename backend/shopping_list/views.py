from django.shortcuts import get_object_or_404
from rest_framework import filters, generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from users.models import User

from .models import Product, ShoppingList
from .serializers import ProductSerializer, ShoppingListSerializer


class ShoppingListViews(viewsets.ModelViewSet):

    serializer_class = ShoppingListSerializer
    lookup_field = "unique_id"

    def get_queryset(self):
        queryset = ShoppingList.objects.filter(
            users__username=self.request.user
        ).order_by("-created_at")
        return queryset

    def perform_create(self, serializer):
        serializer.save(users=[self.request.user])

    def retrieve(self, request, unique_id):
        queryset = self.get_queryset()
        shopping_list = get_object_or_404(queryset, unique_id=unique_id)
        products_price = [p.price * p.quantity for p in shopping_list.products.all()]
        shopping_list.sum = sum(products_price)
        shopping_list.save()
        serializer = ShoppingListSerializer(shopping_list)
        return Response(serializer.data)

    @action(["PATCH", "DELETE"], detail=True, url_path="sharing")
    def sharing(self, request, unique_id):
        queryset = self.get_queryset()
        shopping_list = get_object_or_404(queryset, unique_id=unique_id)
        email = request.data.get("email")
        shared_user = User.objects.filter(email=email).first()
        print(self.request.user)
        if request.method == "PATCH":
            shopping_list.sharing.add(shared_user)
        elif request.method == "DELETE":
            shopping_list.sharing.remove(shared_user)
        shopping_list.save()
        serializer = ShoppingListSerializer(shopping_list)
        return Response(serializer.data)

    @action(["PATCH"], detail=True, url_path="accept-sharing")
    def accept_sharing(self, request, unique_id):
        queryset = self.get_queryset()
        shopping_list = get_object_or_404(queryset, unique_id=unique_id)

        serializer = ShoppingListSerializer(shopping_list)
        return Response(serializer.data)


class ProductsViews(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "unique_id"

    def perform_create(self, serializer):
        shopping_list = ShoppingList.objects.get(
            unique_id=self.request.data["shoppingListUniqueId"]
        )
        p_quantity = (
            self.request.data.get("quantity")
            if self.request.data.get("quantity")
            else 0
        )
        p_price = (
            self.request.data.get("price") if self.request.data.get("price") else 0
        )
        sum_current_product = int(p_quantity) * float(p_price)
        shopping_list.sum = shopping_list.sum + sum_current_product
        shopping_list.save()
        serializer.save(shopping_list_id=shopping_list.id)
        serializer.save()


class SearchShoppingListViews(generics.ListAPIView):
    serializer_class = ShoppingListSerializer

    def get_queryset(self):
        queryset = ShoppingList.objects.filter(
            users__username=self.request.user
        ).order_by("-created_at")
        return queryset

    filter_backends = (filters.SearchFilter,)
    search_fields = ("name", "users__username")
