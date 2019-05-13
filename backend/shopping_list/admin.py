from django.contrib import admin

from .models import Product, ShoppingList

admin.site.register(ShoppingList)
admin.site.register(Product)
