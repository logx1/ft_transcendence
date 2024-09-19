from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Match
from .serializers import MatchSerializer

# Create your views here.

@api_view(['GET'])
def getData(request):
    data = Match.objects.all()
    serializer = MatchSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    serializer = MatchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
