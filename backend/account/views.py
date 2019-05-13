from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import AccountSerializer
from rest_framework.response import Response


class AccountView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AccountSerializer

    def get_object(self):
        return AccountSerializer(self.request.user, context=self.get_serializer_context()).data
