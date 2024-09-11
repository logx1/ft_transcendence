from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'full_name', 'status', 'profile_picture', 'date_cr', 'total_score', 'email', 'password']
