from rest_framework import routers

from .views import UserView

ROUTER = routers.SimpleRouter()
ROUTER.register(r"", UserView, base_name="users")
urlpatterns = ROUTER.urls
