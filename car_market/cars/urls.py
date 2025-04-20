from django.urls import path
from .views import CarListCreateAPIView
from .views import CustomTokenObtainPairView
from .views import RegisterView
from .views import (
    CarListCreateAPIView,
    CustomTokenObtainPairView,
    RegisterView,
    get_user_data  # Импортируем новую view-функцию
)


urlpatterns = [
    path('cars/', CarListCreateAPIView.as_view(), name='car-list-create'),
    path('auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
    path('user/', get_user_data, name='user-data'), 
]
