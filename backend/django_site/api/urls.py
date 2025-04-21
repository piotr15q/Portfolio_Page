from django.urls import path
from .views import predict_view
from .views import predict_cv_view

urlpatterns = [
    path('predict/', predict_view, name="predict"),
    path('predict_cv/', predict_cv_view, name="predict"),
]

