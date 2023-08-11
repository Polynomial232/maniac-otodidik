from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()

    def __str__(self) -> str:
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(Person, on_delete=models.SET_NULL, null=True, blank=True, default=0)
    
    class Meta:
        ordering = ['name']

    def __str__(self) -> str:
        return self.name