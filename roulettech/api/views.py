from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

@api_view(['GET'])
def featured_recipes(request):
    
    recipes = Recipe.objects.filter(is_featured=True)
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_recipes(request):
    
    query = request.GET.get('query', '') 
    recipes = Recipe.objects.filter(name__icontains=query)
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)
