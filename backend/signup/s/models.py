from django.db import models
import cloudinary
from cloudinary.models import CloudinaryField

# Create your models here.

class Signup(models.Model):
          username = models.CharField(blank=False, max_length=20)
          email = models.EmailField(blank=False)
          password = models.CharField(blank=False, max_length=30)
          image = CloudinaryField(
                    'image', blank=True, db_index=True
          )
        #   likes = models.PositiveIntegerField(
        #         default=0, blank=True, db_index=True
        #    )
          


          def __str__(self):
                    return self.username


