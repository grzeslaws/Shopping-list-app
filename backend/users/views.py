from django.contrib.auth.models import Group
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import APIException, NotFound
from rest_framework.response import Response
from rest_framework.views import APIView

from shopping_list.models import ShoppingList
from shopping_list.serializers import ShoppingListSerializer

from .models import SharingList, User
from .serializers import GroupSerializer, SharingListSerializer, UserSerializer


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = "unique_id"


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class AddToSharingListView(APIView):
    def post(self, request, *args, **kwargs):
        owner_email = request.data["owner_email"]
        shopping_list_unique_id = request.data["shopping_list_unique_id"]

        sharing_list = SharingList.objects.filter(owner__email=owner_email).last()

        if sharing_list is None:
            owner = User.objects.filter(email=request.data["owner_email"]).last()
            if owner is None:
                content = {"err": "No such user!!!"}
                return Response(content, status=status.HTTP_400_BAD_REQUEST)
            sharing_list = SharingList(owner=owner)
            sharing_list.save()

        shopping_list = ShoppingList.objects.get(unique_id=shopping_list_unique_id)
        sharing_list.shopping_list.add(shopping_list)
        sharing_list.save()

        content = {"message": "List has been shared!"}
        return Response(content, status=status.HTTP_201_CREATED)


class AcceptShoppingListView(APIView):
    def put(self, request, *args, **kwargs):
        shopping_list_unique_id = request.data["shopping_list_unique_id"]
        shopping_list_in_sharing_list = (
            SharingList.objects.filter(owner__username=request.user)
            .filter(shopping_list__unique_id=shopping_list_unique_id)
            .first()
        )

        if shopping_list_in_sharing_list is not None:
            shopping_list = ShoppingList.objects.get(unique_id=shopping_list_unique_id)
            shopping_list.users.add(request.user)
            sharing_list = SharingList.objects.filter(
                owner__username=request.user
            ).last()
            sharing_list.shopping_list.remove(shopping_list)
            return Response({"message": "Shopping list has been accepted!!!"})
        else:
            content = {"Error message": "No such shared shopping list!!!"}
            return Response(content, status=status.HTTP_404_NOT_FOUND)


class CancelShoppingListView(APIView):
    def put(self, request, *args, **kwargs):
        shopping_list_unique_id = request.data["shopping_list_unique_id"]
        shopping_list_in_sharing_list = (
            SharingList.objects.filter(owner__username=request.user)
            .filter(shopping_list__unique_id=shopping_list_unique_id)
            .first()
        )

        if shopping_list_in_sharing_list is not None:
            shopping_list = ShoppingList.objects.get(unique_id=shopping_list_unique_id)
            sharing_list = SharingList.objects.filter(
                owner__username=request.user
            ).last()
            sharing_list.shopping_list.remove(shopping_list)
            return Response({"message": "Shopping list has been canceled!!!"})
        else:
            content = {"Error message": "No such shared shopping list!!!"}
            return Response(content, status=status.HTTP_404_NOT_FOUND)


class GetSharingShoppingListView(APIView):
    def get(self, request, format=None):
        sharing_list = SharingList.objects.filter(
            owner__username=self.request.user
        ).last()
        serializer = SharingListSerializer(sharing_list)
        return Response(serializer.data)
