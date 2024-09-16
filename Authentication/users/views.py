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

# Create your views here.




class RegisterViews(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)



class LoginViews(APIView):
    def post(self,request):
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
    def get(self,request):
        
        
        token = request.COOKIES.get('access')

        # print(request.COOKIES)
        if not token:
            raise AuthenticationFailed('Unauthenticated user')
        
        try:
            UntypedToken(token)
        except (InvalidToken, TokenError) as e:
            raise AuthenticationFailed('Unauthenticated')

        id = token_backend.decode(token)['user_id']
        user = User.objects.filter(id=id).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)

class LogoutViews(APIView):
    def post(self,request):
        response = Response()
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        response.data = {
            'message':'success'
        }
        return response
    
# the function below is for the home page he needs to be authenticated to access it


