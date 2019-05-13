import uuid

from django.db import models

from users.models import User


class ShoppingList(models.Model):
    unique_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=255, null=True)
    color = models.CharField(max_length=7, default="#ffffff")
    created_at = models.DateTimeField(auto_now_add=True)
    sum = models.FloatField(default=0)
    users = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return "Shopping list name: {}".format(self.name)


class Product(models.Model):
    unique_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=255)
    quantity = models.IntegerField(default=0)
    checked = models.BooleanField(default=False)
    price = models.FloatField(default=0)
    shopping_list = models.ForeignKey(
        ShoppingList, related_name="products", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return "Product name: {}".format(self.name)
