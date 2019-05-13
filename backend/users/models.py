import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    unique_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    picture = models.CharField(max_length=255, null=True)


class SharingList(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    shopping_list = models.ManyToManyField("shopping_list.ShoppingList", blank=True)

    def __str__(self):
        return "Sharing owner: {}, Sharing id: {}".format(self.owner.username, self.id)
