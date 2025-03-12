from django.urls import path
from .views import get_text

urlpatterns = [
    path('text/', get_text),
]