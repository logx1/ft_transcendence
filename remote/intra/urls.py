
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('callback/', views.callback, name='callback'),
    path('profile/', views.user_profile, name='user_profile'),
]