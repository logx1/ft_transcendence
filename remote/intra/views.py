from django.shortcuts import render

from django.shortcuts import redirect

from django.http import HttpResponse
from django.http import JsonResponse
import requests
import environ
import os


def home(request):
    return redirect('https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-91f8778fa87936f38550f1c2e6d338313fce62728e36546968a03cd30838d17b&redirect_uri=http%3A%2F%2F10.11.4.1%3A8000%2Fcallback%2F&response_type=code')

def callback(request):
    code = request.GET.get('code')
    # print(code)
    token_url = 'https://api.intra.42.fr/oauth/token'
    data = {
        'grant_type': 'authorization_code',
        'client_id': environ.Env().str('UID'),
        'client_secret': environ.Env().str('SECRET'),
        'code': code,
        'redirect_uri': "http://10.11.4.1:8000/callback/",
    }

    response = requests.post(token_url, data=data)
    token_data = response.json()
    acc = token_data.get('access_token')
    
    data = get_user_profile(acc)
    print(data.get('id'))
    print(data.get('first_name'))
    print(data.get('last_name'))
    print(data.get('login'))
    print(data.get('email'))


    return redirect('http://10.11.4.1:8000/profile/')


def get_user_profile(access_token):
    url = 'https://api.intra.42.fr/v2/me'
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(url, headers=headers)
    return response.json()


def user_profile(request):
    access_token = "e7f13992fb927d5e2712eeba2a2b9d6d1754515043e4d60f5380e2523daf4d42"
    print("the accis tokin is : " + access_token)

  

    profile_data = get_user_profile(access_token)
    return JsonResponse(profile_data)
