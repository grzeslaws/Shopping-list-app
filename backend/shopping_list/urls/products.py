from rest_framework import routers

from shopping_list.views import ProductsViews

router = routers.SimpleRouter()
router.register("", ProductsViews)
urlpatterns = router.urls
