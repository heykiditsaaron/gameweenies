from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('<slug>', ProfileView, name='profile'),
#    path('<slug>', ProfileView.as_view(), name='profile'),
]