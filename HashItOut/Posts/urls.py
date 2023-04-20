from django.urls import path
from . import views

urlpatterns =[
    path('Posts/',views.post),
    path('newpost/', views.newpost)
]
