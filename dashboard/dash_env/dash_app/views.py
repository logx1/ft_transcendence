from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from .models import User
from django import forms
from rest_framework import status
from .serializers import UserSerializer
from django.http import JsonResponse
import json
import base64

@api_view(['GET', 'POST'])
def UserListView(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer_class = UserSerializer(users, many=True)
        return(Response(serializer_class.data))
    if request.method == 'POST':
        serializer_class = UserSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.data, status=status.HTTP_400_BAD_REQUEST)

def check_username(username, user_id):
    try:
        User.objects.exclude(pk=user_id).get(username=username)
    except User.DoesNotExist:
        return username
    raise forms.ValidationError("A user with this username already exists.")

def check_full_name(full_name, user_id):
    try:
        User.objects.exclude(pk=user_id).get(full_name=full_name)
    except User.DoesNotExist:
        return full_name
    raise forms.ValidationError("A user with this name already exists.")

@api_view(['PUT', 'GET'])
def UpdateUser(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return (Response({"message":"User Not Found"}, status=status.HTTP_404_NOT_FOUND))
    
    serializer_class = UserSerializer(user, data=request.data, partial=True)
    if serializer_class.is_valid():
        try:
            check_username(serializer_class.validated_data.get('username'), user.id)
            check_full_name(serializer_class.validated_data.get('full_name'), user.id)
        except forms.ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        serializer_class.save()
        return(Response(serializer_class.data, status=status.HTTP_200_OK))
    return (Response(serializer_class.data, status=status.HTTP_400_BAD_REQUEST))

@api_view(['DELETE'])
def delete_user(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response({"error": "User Not Found"}, status=status.HTTP_404_NOT_FOUND)
    user.delete()
    return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

# ////////////////
from PIL import Image
from io import BytesIO

def ConvImg(img_path):
    try:
        with open(img_path, "rb") as img:
            data = base64.b64encode(img.read())
            base64_string = data.decode("utf-8")
            print(base64_string)
            return base64_string

    except FileNotFoundError:
        print("file not found")
        return None

    except Exception as e:
        print ("an error occured: {e}")
        return None

@api_view(['GET', 'PUT'])
def GetUserData(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return JsonResponse({'error': 'user not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        profile_64 = ConvImg("images/mudkip.png")
        data = {
            'id': user.id,
            'full_name': user.full_name,
            'username': user.username,
            'date_cr': user.date_cr,
            'status': user.status,
            'total_score': user.total_score,
            'profile_picture': profile_64,
        }
        return JsonResponse(data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        user.status = data.get('status', user.status)
        user.save()
        return JsonResponse({'message': 'Updated!', 'status': user.status})
