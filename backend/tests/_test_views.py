from django.test import TestCase, Client
from django.urls import reverse
from shopping_list.views import ShoppingListViews
from shopping_list.models import ShoppingList
from users.models import User
import json
from rest_framework.test import force_authenticate, APIRequestFactory
import pprint
pp = pprint.PrettyPrinter(indent=4)


class TestViews(TestCase):
    def test_shopping_list_views(self):
        client = Client()
        response = client.get(reverse("shoppinglist-list"))
        self.assertEquals(response.status_code, 200)

    def test_shopping_detail_views(self):
        factory = APIRequestFactory()
        client = Client()
        view = ShoppingListViews.as_view({'get': 'list'})

        user = User.objects.create_superuser(
            username="Greg", email="grzesupel@gmail.com", is_staff=True, password="123")
        shopping_list = ShoppingList.objects.create(
            name="Some name shopping list")
        shopping_list.users.add(user)

        url = reverse("shoppinglist-detail", args=[shopping_list.unique_id])

        client = Client()
        client.force_login(user=user)
        # request = factory.get(url)
        # force_authenticate(request, user=user)
        # pp.pprint(view(request).__dict__)
        response = client.get(url, format='json')
        pp.pprint(response.wsgi_request.__dict__)
        # self.assertEquals(response.status_code, 200)
        assert 1 == 1
