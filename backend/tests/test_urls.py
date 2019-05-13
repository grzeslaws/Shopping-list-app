from django.test import SimpleTestCase
from django.urls import resolve, reverse
from shopping_list.views import ProductsViews, ShoppingListViews, SearchShoppingListViews
from users.views import GetSharingShoppingListView, AddToSharingListView, AcceptShoppingListView, CancelShoppingListView
from account.views import AccountView


class TestShoppingListAndProductUrls(SimpleTestCase):
    def test_product_list_url_is_resolved(self):
        url = reverse("product-list")
        self.assertEquals(resolve(url).func.cls, ProductsViews)

    def test_product_detail_url_is_resolved(self):
        url = reverse("product-detail", args=["some-unique-id"])
        self.assertEquals(resolve(url).func.cls, ProductsViews)

    def test_shopping_list_url_is_resolved(self):
        url = reverse("shoppinglist-list")
        self.assertEquals(resolve(url).func.cls, ShoppingListViews)

    def test_shopping_detail_url_is_resolved(self):
        url = reverse("shoppinglist-detail", args=["some-unique-id"])
        self.assertEquals(resolve(url).func.cls, ShoppingListViews)

    def test_shopping_sharing_url_is_resolved(self):
        url = reverse("shoppinglist-sharing", args=["some-unique-id"])
        self.assertEquals(resolve(url).func.cls, ShoppingListViews)

    def test_shopping_accept_sharing_url_is_resolved(self):
        url = reverse("shoppinglist-accept-sharing", args=["some-unique-id"])
        self.assertEquals(resolve(url).func.cls, ShoppingListViews)

    def test_shopping_list_search_url_is_resolved(self):
        url = reverse("search-shopping-list")
        self.assertEquals(resolve(url).func.cls, SearchShoppingListViews)


class TestUser(SimpleTestCase):
    def test_get_sharing_list(self):
        url = reverse("get-sharing-list")
        self.assertEquals(resolve(url).func.cls, GetSharingShoppingListView)

    def test_add_to_sharing_list(self):
        url = reverse("add-to-sharing-list")
        self.assertEquals(resolve(url).func.cls, AddToSharingListView)

    def test_accept_shopping_list(self):
        url = reverse("accept-shopping-list")
        self.assertEquals(resolve(url).func.cls, AcceptShoppingListView)

    def test_cancel_shopping_list(self):
        url = reverse("cancel-shopping-list")
        self.assertEquals(resolve(url).func.cls, CancelShoppingListView)


class TestAccount(SimpleTestCase):
    def test_account(self):
        url = reverse("account")
        self.assertEquals(resolve(url).func.cls, AccountView)
