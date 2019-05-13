from rest_framework import serializers
from users.models import User


class AccountSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email',
                  'picture', 'first_name', 'last_name', "unique_id") 
