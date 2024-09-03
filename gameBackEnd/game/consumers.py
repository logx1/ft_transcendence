import json
import time
import threading
import asyncio

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync



# creat aclass of cameMechanics how will be responsible for the game mechanics and he take to objict of GameConsumer

class GameMechanics:
    def __init__(self, player1, player2):
        self.player1 = player1
        self.player2 = player2
        self.channel_layer = get_channel_layer()
        self.ball_speed = 1
        self.ball_direction = 1
    
    def start(self):
        print('Before calling game_loop')
        async_to_sync(self.game_loop)()
        print('After calling game_loop')

    async def game_loop(self):
        await self.channel_layer.group_send(
            'gamee',
                {
                    'type': 'chat_message',
                    'left_y': 11,
                    'right_y': 11,
                }
            )
        await asyncio.sleep(1)




class GameConsumer(WebsocketConsumer):
    players_number = 0
    instances = []

    def start(self):
        print('game started')


    def connect(self):
        self.room_group_name = 'gamee'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name,
        )

        self.accept()
        GameConsumer.players_number += 1
        print(f'players number: {GameConsumer.players_number}', flush=True)
        
        GameConsumer.instances.append(self)

        self.send(text_data=json.dumps({
            'type': 'connection established',
            'message': 'welcome from the server your now connected',
        }))


        if GameConsumer.players_number == 2:
            print('players number:', GameConsumer.players_number)
            GameMechanics(GameConsumer.instances[0], GameConsumer.instances[1]).start()
        
    
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        # print('text data:', text_data_json)

        if 'table_width' in text_data_json:
            self.table_width = text_data_json['table_width']
            self.table_height = text_data_json['table_height']
            table_height = self.table_height
            table_width = self.table_width
            self.ball_x = table_width/2
            self.ball_y = table_height/2
            print('table width:', table_width)
            print('table height:', table_height)
            return
        self.ball_x += 1
        self.ball_y += 1

        left_y = text_data_json['left_y']

        right_y = text_data_json['right_y']
        
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',  # i don't now wht we need to add this line 
                'left_y': left_y,
                'right_y': right_y,
            }
            )

    def disconnect(self, close_code):
        GameConsumer.players_number -= 1
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name,
        )






    
    def chat_message(self, event):

        left_y = event['left_y']
        right_y = event['right_y']

        self.send(text_data=json.dumps({

            'left_y': left_y,

            'right_y': right_y,

        }))





        




    

