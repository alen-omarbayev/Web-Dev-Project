from rest_framework import generics
from .models import Car
from .serializers import CarSerializer

class CarListCreateAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all().order_by('-id')
    serializer_class = CarSerializer
