from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

@api_view(['POST'])
def login(request):
    user = User.objects.get(username=request.data['username'])
    if user.check_password(request.data['password']):
        token = Token.objects.get(user=user)
        return Response({"token": token.key, "user": UserSerializer(user).data})
    
    return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
    return Response({})

@api_view(['GET'])
def test_token(request):
    return Response({})
