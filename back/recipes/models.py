from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.name}"

class Recipes(models.Model):
    name = models.CharField(max_length=64)
    text = models.TextField(max_length=7000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} in {self.category} category"