from rest_framework.generics import ListAPIView
from .models import User
from dash_app.models import User
from .serializers import UserSerializer

class UserListView(ListAPIView):
    queryset = User.objects.all() #retrieve all the users
    serializer_class = UserSerializer #converts the users to JSON format

user = User.objects.first()
print(user)