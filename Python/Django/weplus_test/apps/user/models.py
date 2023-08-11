from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    def __str__(self) -> str:
        return self.username
    
    class Meta:
        # managed = False
        db_table = 'user_login'