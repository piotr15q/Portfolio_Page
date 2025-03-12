from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
# Create your views here.

@api_view(['Get'])
def get_text(request):
    return JsonResponse({"message": "Hello world Django api"})
