from django.shortcuts import render

# Create your views here.

def post(request):
    pass

def newpost(request):
    return render(request, 'index.html')