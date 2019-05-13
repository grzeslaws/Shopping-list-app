from django.contrib.auth.models import Group
from rest_framework import serializers

from shopping_list.models import ShoppingList
from shopping_list.serializers import ShoppingListSerializer

from .models import SharingList, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "picture",
            "first_name",
            "last_name",
            "unique_id",
        )


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = "name"


class SharingListSerializer(serializers.ModelSerializer):
    shopping_list = ShoppingListSerializer(many=True)

    class Meta:
        model = SharingList
        fields = ("shopping_list",)
