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


from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode



from django.core.mail import send_mail
from rest_framework.decorators import api_view
from django.http import HttpRequest

@api_view(['GET', 'POST'])
def email_send(request, email):
    try:
        # Ensure get_current_site receives a HttpRequest object
        current_site = get_current_site(request._request if hasattr(request, '_request') else request)
        encoded_site = urlsafe_base64_encode(force_bytes(email))
        
        if email is not None:
            send_mail(
                'Hello My Lol from ' + current_site.domain,  # Subject
                'Here is the message. Encoded site: '+ 'http://127.0.0.1:8000/api/email/activate/' + encoded_site,  # Message
                'eloualy73@gmail.com',  # From email
                [email],  # To email
                fail_silently=False,
            )
        response_data = {'message': 'Email sent successfully'}
    except Exception as e:
        response_data = {'message': 'Failed to send email', 'error': str(e)}

    return Response(response_data)

@api_view(['GET', 'POST'])
def email_activate(request, code):
    the_code = code
    the_email = urlsafe_base64_decode(code).decode('utf-8')
    print("The decoded string is > " + the_email)
    user = User.objects.filter(email=the_email).first()
    if user is not None:
        user.is_active = True
        user.save()
    response_data = {'message': 'Email activated successfully'}
    return Response(response_data)
    
class RegisterViews(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        email_send(request._request, email=request.data['email'])
        return Response(serializer.data)



class LoginViews(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        is_active = User.objects.filter(email=email).values('is_active')[0]['is_active']
        if user is None:
            raise AuthenticationFailed('User not found')
        if not user.is_active==True:
            raise AuthenticationFailed('User not active')
        
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
    


