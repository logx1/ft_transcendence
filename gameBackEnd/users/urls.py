
from django.urls import path,include
from .views import RegisterViews
from .views import LoginViews
from .views import UserViews
from .views import LogoutViews
from .views import UsersListViews
from chat.views import get_chat_history

urlpatterns = [
    path('register/',RegisterViews.as_view()),
    path('login/',LoginViews.as_view()),
    path('user/',UserViews.as_view()),
    path('users_list/',UsersListViews),
    path('chat_history/<str:room_name>/', get_chat_history, name='get_chat_history'),
    # path('logout/',LogoutViews())
]
