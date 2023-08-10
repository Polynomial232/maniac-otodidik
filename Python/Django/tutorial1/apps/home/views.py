from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    users = [
        {
            "name": "daffa",
            "age": 29,
        },
        {
            "name": "daffa2",
            "age": 16,
        }
    ]

    text = "add text new"
    return render(request, "index.html", context={"page" : "index", 'users': users, "text": text, "page": "index"})

def about(request):
    context = {"page": "About"}
    return render(request, "about.html", context)

def contact(request):
    context = {"page": "Contact"}
    return render(request, "contact.html", context)

def success_page(request):
    return HttpResponse("Success Page")