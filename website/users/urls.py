from django.urls import path
from django.views import generic
from .views import Profile
from . import views

urlpatterns = [
    path('<str:username>/', views.redirect_to_pk, name='redirect'),
    path('<int:pk>', Profile.as_view(), name='profile'),
]
