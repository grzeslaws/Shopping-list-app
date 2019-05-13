from django.contrib import admin
from django.urls import path, include, re_path
from account import views as accountViews
from users import views as usersViews
from shopping_list import views as shoppingViews
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("users.urls")),
    path("shopping-list/", include("shopping_list.urls.shopping_list")),
    path(
        "get-sharing-list/",
        usersViews.GetSharingShoppingListView.as_view(),
        name="get-sharing-list",
    ),
    path(
        "add-to-sharing-list/",
        usersViews.AddToSharingListView.as_view(),
        name="add-to-sharing-list",
    ),
    path(
        "accept-shopping-list/",
        usersViews.AcceptShoppingListView.as_view(),
        name="accept-shopping-list",
    ),
    path(
        "cancel-shopping-list/",
        usersViews.CancelShoppingListView.as_view(),
        name="cancel-shopping-list",
    ),
    path(
        "search-shopping-list",
        shoppingViews.SearchShoppingListViews.as_view(),
        name="search-shopping-list",
    ),
    path("products/", include("shopping_list.urls.products")),
    path("account/", accountViews.AccountView.as_view(), name="account"),
    path("auth/", include("rest_framework_social_oauth2.urls")),
    re_path(r"^.*", TemplateView.as_view(template_name="index.html")),
]
