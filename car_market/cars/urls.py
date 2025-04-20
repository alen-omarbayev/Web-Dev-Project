from django.urls import path
from .views import CarListCreateAPIView
from .views import CustomTokenObtainPairView
from .views import RegisterView

urlpatterns = [
    path('cars/', CarListCreateAPIView.as_view(), name='car-list-create'),
    path('auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
]
