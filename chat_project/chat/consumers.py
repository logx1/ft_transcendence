import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth import get_user_model
from .models import ChatMessage

User = get_user_model()

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f"chat_{self.room_name}"
        print(" the websock is connected")

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):

        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        user = self.scope["user"]
        print(user)

        if user.is_authenticated:
            ChatMessage.objects.create(user=user, room_name=self.room_name, message=message)

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender': "test1"
            }
        )

    def chat_message(self, event):
        message = event['message']
        user = event['user']

        self.send(text_data=json.dumps({
            'sender': "test2",
            'message': message
        }))















# import json
# from datetime import datetime
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import WebsocketConsumer
# from django.contrib.auth import get_user_model
# from .models import ChatMessage

# User = get_user_model()

# class ChatConsumer(WebsocketConsumer):
#     def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = f"chat_{self.room_name}"

#         async_to_sync(self.channel_layer.group_add)(
#             self.room_group_name,
#             self.channel_name
#         )

#         self.accept()

#     def disconnect(self, close_code):
#         async_to_sync(self.channel_layer.group_discard)(
#             self.room_group_name,
#             self.channel_name
#         )

#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']
#         user = self.scope["user"]

#         if user.is_authenticated:
#             chat_message = ChatMessage.objects.create(
#                 user=user,
#                 room=self.room_name,
#                 content=message,
#                 timestamp=datetime.now()
#             )

#         async_to_sync(self.channel_layer.group_send)(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message,
#                 'user': user,
#                 'timestamp': chat_message.timestamp.isoformat()
#             }
#         )

#     def chat_message(self, event):
#         message = event['message']
#         user = event['user']
#         timestamp = event['timestamp']

#         self.send(text_data=json.dumps({
#             'user': user,
#             'message': message,
#             'timestamp': timestamp
#         }))















# import json
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import WebsocketConsumer
# from django.contrib.auth import get_user_model
# from .models import ChatMessage

# User = get_user_model()
 
# class ChatConsumer(WebsocketConsumer):
#     def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = f"chat_{self.room_name}"

#         async_to_sync(self.channel_layer.group_add)(
#             self.room_group_name,
#             self.channel_name
#         )
#         self.accept()

#     def disconnect(self, close_code):

#         async_to_sync(self.channel_layer.group_discard)(
#             self.room_group_name,
#             self.channel_name
#         )

#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']
#         user = self.scope["user"]

#         if user.is_authenticated:
#             ChatMessage.objects.create(
#                 user=user,
#                 room_name=self.room_name,
#                 content=message
#             )
#         else:
#             # Handle anonymous users, e.g., create a guest user
#             guest_user = User.objects.get_or_create(username='Guest')[0]
#             ChatMessage.objects.create(
#                 user=guest_user,
#                 room_name=self.room_name,
#                 content=message
#             )

#         async_to_sync(self.channel_layer.group_send)(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message,
#                 'user': user.username if user.is_authenticated else 'Guest'
#             }
#         )
#     def chat_message(self, event):
#         message = event['message']
#         user = event['user']

#         self.send(text_data=json.dumps({
#             'user': user,
#             'message': message
#         }))