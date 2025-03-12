from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from django.http import JsonResponse
from PIL import Image
from .model import predict_image
# Create your views here.

@api_view(["POST"])
@parser_classes([MultiPartParser])
def predict_view(request):
    if "image" not in request.FILES:
        return JsonResponse({"error": "No image uploaded"}, status=400)

    image_file = request.FILES["image"]
    image = Image.open(image_file).convert("RGB")

    prediction = predict_image(image)
    result = "Dog" if prediction == 1 else "Cat"

    return JsonResponse({"prediction": result})
