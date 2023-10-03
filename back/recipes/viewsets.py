from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from .models import Category, Recipes
from .serializers import CategorySerializer, RecipesSerializer


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ['get']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        'id',
        'name',
    ]


class RecipesViewset(viewsets.ModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
    http_method_names = ['get']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        'id',
        'name',
        'category',
    ]