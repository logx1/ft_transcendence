from django.http import JsonResponse
from .models import ChatMessage

def get_chat_history(request, room_name):
    messages = ChatMessage.objects.filter(room=room_name).order_by('timestamp')
    # console.log(messages);
    messages_data = [
        {
            "sender": message.sender.username,
            "content": message.content,
            "timestamp": message.timestamp.isoformat()
        }
        for message in messages
    ]
    return JsonResponse({"room_name": room_name, "messages": messages_data})
