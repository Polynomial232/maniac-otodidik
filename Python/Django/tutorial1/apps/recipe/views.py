from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Recipe

# Create your views here.

def recipes(request):
    if request.method == "POST":
        data = request.POST

        recipe_name = data.get('recipe_name')

        get = Recipe.objects.filter(recipe_name=recipe_name)
        if get.exists():
            messages.error(request, "name exists")
            return redirect('/recipes/')

        recipe_description = data.get('recipe_description')
        recipe_image = request.FILES.get('recipe_image')
        Recipe.objects.create(
            recipe_name=recipe_name,
            recipe_description=recipe_description,
            recipe_image=recipe_image
        )

    all_recipes = Recipe.objects.all()
    context = {'recipes': all_recipes}
    return render(request, 'recipes.html', context)

def delete_recipe(request, id):
    recipe = Recipe.objects.get(id=id)
    recipe.delete()
    return redirect('/recipes/')

def update_recipe(request, id):
    recipe = Recipe.objects.get(id=id)

    if request.method == "POST":
        data = request.POST

        recipe_name = data.get('recipe_name')
        recipe_description = data.get('recipe_description')
        recipe_image = request.FILES.get('recipe_image')
        recipe.recipe_name = recipe_name
        recipe.recipe_description = recipe_description

        if recipe_image:
            recipe.recipe_image = recipe_image

        recipe.save()

    context = {'recipes': recipe}
    return render(request, 'update_recipe.html', context)