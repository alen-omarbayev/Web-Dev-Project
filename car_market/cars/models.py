from django.db import models

class Car(models.Model):
    CONDITION_CHOICES = [
        ('new', 'New'),
        ('used', 'Used'),
    ]

    brand = models.CharField(max_length=100)
    condition = models.CharField(max_length=10, choices=CONDITION_CHOICES)
    year = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    photo = models.ImageField(upload_to='car_photos/')

    def __str__(self):
        return f"{self.brand} ({self.year})"
