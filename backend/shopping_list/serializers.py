from rest_framework import serializers

from .models import Product, ShoppingList


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id", "unique_id", "name", "quantity", "checked", "price")


class ShoppingListSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    users = StringSerializer(many=True, read_only=True)

    class Meta:
        model = ShoppingList
        fields = (
            "id",
            "unique_id",
            "name",
            "created_at",
            "sum",
            "products",
            "users",
            "color",
        )
