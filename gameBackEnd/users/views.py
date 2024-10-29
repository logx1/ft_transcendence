from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User
import jwt
import datetime
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.state import token_backend
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse


# Create your views here.

from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed

class CookieTokenAuthentication(TokenAuthentication):
    def get_token(self, request):
        token = request.COOKIES.get('access')
        if not token:
            raise AuthenticationFailed('No token provided')
        return token






class RegisterViews(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


def UsersListViews(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)

class LoginViews(APIView):

    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User not found')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password')
        
        refresh = RefreshToken.for_user(user)
        
        response = Response()

        response.set_cookie(key='refresh', value=str(refresh), httponly=True)
        response.set_cookie(key='access', value=str(refresh.access_token), httponly=True)

        response.data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return response


class UserViews(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self,request):
        
        
        token = request.COOKIES.get('access')

        if not token:
            test_user = {'id': 0, 'name': 'test_user', 'email': 'test@example.com'}
            return Response(test_user)

        try:
            UntypedToken(token)
        except (InvalidToken, TokenError) as e:
            test_user = {'id': 0, 'name': 'test_user', 'email': 'test@example.com'}
            return Response(test_user)
        
        id = token_backend.decode(token)['user_id']
        user = User.objects.filter(id=id).first()
        
        if user:
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            test_user = {'id': 0, 'name': 'test_user', 'email': 'test@example.com'}
            return Response(test_user)

class LogoutViews(APIView):
    # authentication_classes = [CookieTokenAuthentication]
    # permission_classes = [IsAuthenticated]
    def post(self,request):
        response = Response()
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        response.data = {
            'message':'success'
        }
        return response
    


