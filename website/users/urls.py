from django.urls import path
from .views import Profile

urlpatterns = [
    path('<slug>', Profile.as_view(), name='profile'),
]
