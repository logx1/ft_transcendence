from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from rest_framework import status
from .serializers import UserSerializer

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
