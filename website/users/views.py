from django.urls import reverse_lazy, reverse
from django.views import generic
from .models import CustomUser
from django.shortcuts import render, get_object_or_404, HttpResponseRedirect

# Create your views here.
def redirect_to_pk(request, username):
    object = get_object_or_404(CustomUser, displayname__iexact=username)
    return HttpResponseRedirect(reverse_lazy('profile', kwargs={'pk': object.pk}))


class Profile(generic.DetailView):
    model = CustomUser
    template_name = 'users/user_profile.html'