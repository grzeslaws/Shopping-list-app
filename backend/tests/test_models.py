import pprint

from django.test import TestCase

from shopping_list.models import Product, ShoppingList
from users.models import User

pp = pprint.PrettyPrinter(indent=4)


class TestModels(TestCase):
    def setUp(self):
        self.user = User.objects.create_superuser(
            username="Greg", email="grzesupel@gmail.com", password="123"
        )
        self.shopping_list = ShoppingList.objects.create(name="Name shopping list")
        self.shopping_list.users.add(self.user)
        self.product = Product.objects.create(
            name="Example product name", shopping_list=self.shopping_list
        )

    def test_is_user_created(self):
        self.assertEquals(self.user.username, "Greg")

    def test_is_shopping_list_created(self):
        u = User.objects.get(username="Greg")
        # pp.pprint(User._meta.get_fields())
        # pp.pprint(u.shoppinglist_set.first().name)
        self.assertEquals(self.shopping_list.name, "Name shopping list")
        self.assertEquals(u.shoppinglist_set.first().name, "Name shopping list")

    def test_is_product_created(self):
        pp.pprint(Product._meta.get_fields())
        self.assertEquals(self.product.name, "Example product name")
        self.assertEquals(self.product.shopping_list.name, "Name shopping list")
        self.assertEquals(self.product.quantity, 0)
        self.assertEquals(self.product.checked, False)

    def test_product_details(self):
        self.product.quantity = 2
        self.product.checked = True
        self.product.save()
        p = Product.objects.get(name="Example product name")
        self.assertEquals(p.quantity, 2)
        self.assertEquals(p.checked, True)
