from django.urls import path
from .views import featured_recipes, search_recipes

urlpatterns = [
    path('featured-recipes/', featured_recipes, name='featured_recipes'),
    path('search-recipes/', search_recipes, name='search_recipes'),
]
