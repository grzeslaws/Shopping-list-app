from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group

from .models import SharingList, User


class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {"fields": ("id", "email", "username", "picture", "unique_id")}),
        ("Permission", {"fields": ("is_superuser", "is_staff")}),
    )
    fieldsets = (
        (None, {"fields": ("id", "email", "username", "picture", "unique_id")}),
        ("Permission", {"fields": ("is_superuser", "is_staff")}),
    )
    list_display = ["id", "email", "username", "picture", "unique_id"]
    search_fields = ("email", "username")
    ordering = ("email",)


admin.site.register(SharingList)
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
