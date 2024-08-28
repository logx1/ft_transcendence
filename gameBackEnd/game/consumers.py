import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer



class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'testt'
        # add all the user to tha same group to share the same board

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        self.send(text_data=json.dumps({
            'type': 'connection established',
            'message': 'Connected',
            }))
    
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        x = text_data_json['x']
        y = text_data_json['y']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',  # i don't now wht we need to add this line 
                'x': x,
                'y': y
            }
        )
    
    def chat_message(self, event):
        x = event['x']
        y = event['y']

        self.send(text_data=json.dumps({
            'x': x,
            'y': y
        }))