from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    address = models.TextField()
    image = models.ImageField(null=True, blank=True)
    file = models.FileField()

class Stuff(models.Model):
    name = models.CharField(max_length=255)
    # owner = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.name