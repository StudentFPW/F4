from rest_framework import serializers

from .models import Category, Recipes


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class RecipesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipes
        fields = '__all__'