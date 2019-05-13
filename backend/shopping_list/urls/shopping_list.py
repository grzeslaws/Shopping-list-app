from rest_framework import routers

from shopping_list.views import ShoppingListViews

router = routers.SimpleRouter()
router.register(r"", ShoppingListViews, base_name="shoppinglist")
urlpatterns = router.urls
