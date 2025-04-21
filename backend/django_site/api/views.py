from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from django.http import JsonResponse
from PIL import Image

from .cv_classification_model import predict_cv
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

@api_view(["POST"])
@parser_classes([MultiPartParser])
def predict_cv_view(request):
    if "file" not in request.FILES:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    try:
        file = request.FILES['file']
        result = predict_cv(file)

        if isinstance(result, dict) and "error" in result:
            return JsonResponse(result, status=500)

        return JsonResponse({'prediction': result['prediction']})
    except Exception as e:
        import traceback
        print("🔥 Exception:")
        print(traceback.format_exc())
        return JsonResponse({"error": str(e)}, status=500)