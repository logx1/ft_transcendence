"""
URL configuration for dash_env project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.contrib import admin
from dash_app.views import UpdateUser, delete_user, GetUserData

urlpatterns = [ #list that stores all the URLs, each entry maps a URL to a view
    # path('api/users/<int:pk>/', UpdateUser, name='user-update'),
    # path('api/users/<int:pk>/delete', delete_user, name='user-delete'),
    # path('api/users/', UserListView, name='user-list'),
    # path('user-profile/', serve_html, name='serve'),
    # path('login/', loginU, name='login')
    path('admin/', admin.site.urls),
    path('user-info/<int:user_id>/', GetUserData, name='user-profile'),
    # path('status-info/<int:user_id>/', StatusInfo, name='status'),
]
