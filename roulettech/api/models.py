from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name
