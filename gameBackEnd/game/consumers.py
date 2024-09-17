import asyncio
from channels.generic.websocket import AsyncJsonWebsocketConsumer


class GameConsumer(AsyncJsonWebsocketConsumer):
    clients = 0
    groups = []
    
    async def connect(self):

        cookies = self.scope['cookies']

        token = cookies.get('access')
        if not token:
            await self.close()
        print(cookies)
        if GameConsumer.clients == 0:
            GameConsumer.groups.append("group" + str(len(GameConsumer.groups)))
            print(str(GameConsumer.groups))
        self.groups = GameConsumer.groups[len(GameConsumer.groups) - 1]
        GameConsumer.clients += 1

        

        await self.channel_layer.group_add(self.groups, self.channel_name)
        await self.accept()
        if GameConsumer.clients == 1:
            await self.send_json({
                "player": 1
            })
        if GameConsumer.clients == 2:
            await self.send_json({
                "player": 2
            })
        
        if GameConsumer.clients == 2:
            await self.channel_layer.group_send(
                self.groups,
                {
                    "type": "send_start_game",
                    "start_game": "the group : " + self.groups + " is ready to play"
                }
            )
            GameConsumer.clients = 0


    async def disconnect(self, close_code):
        GameConsumer.clients -= 1
        await self.channel_layer.group_discard("game", self.channel_name)

    async def receive_json(self, content):
        if "left_r" in content:
            await self.channel_layer.group_send(
                self.groups,
                {
                    "type": "send_left_corictor",
                    "left_r": content.get("left_r", 0)
                }
            )
        if "right_r" in content:
            await self.channel_layer.group_send(
                self.groups,
                {
                    "type": "send_right_corictor",
                    "right_r": content.get("right_r", 0)
                }
            )

        if "top_r" in content:
            await self.channel_layer.group_send(
                self.groups,
                {
                    "type": "send_top_corictor",
                    "top_r": content.get("top_r", 0),
                    "ball_x": content.get("ball_x", 0),
                }
            )
        if "down_r" in content:
            await self.channel_layer.group_send(
                self.groups,
                {
                    "type": "send_down_corictor",
                    "down_r": content.get("down_r", 0),
                    "ball_x": content.get("ball_x", 0),
                }
            )


        else:
            await self.channel_layer.group_send(
            self.groups,
            {
                "type": "send.rock",
                "left_y": content.get("left_y", 0),
                "right_y": content.get("right_y",0),
            }
        )
       
    async def send_ball(self, event):
        await self.send_json(
            {
                "ball_x": event["ball_x"],
                "ball_y": event["ball_y"],
            }
        )
    
    async def send_rock(self, event):
        await self.send_json(
            {
                "left_y": event["left_y"],
                "right_y": event["right_y"],
            }
        )
    async def send_start_game(self, event):
        await self.send_json({
            "start_game": event["start_game"]
        })
    async def send_left_corictor(self, event):
        await self.send_json({
            "left_r": event["left_r"]
        })
    async def send_right_corictor(self, event):
        await self.send_json({
            "right_r": event["right_r"]
        })

    async def send_top_corictor(self, event):
        await self.send_json({
            "top_r": event["top_r"],
            "ball_x": event["ball_x"],
        })

    async def send_down_corictor(self, event):
        await self.send_json({
            "down_r": event["down_r"],
            "ball_x": event["ball_x"],
        })
