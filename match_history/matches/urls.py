from django.urls import path

from . import views

urlpatterns = [
    path('',views.getData, name='index'),
    path('add/',views.postData, name='add'),
]