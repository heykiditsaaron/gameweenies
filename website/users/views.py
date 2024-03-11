from django.views.generic import DetailView, FormView, CreateView, TemplateView
from django.shortcuts import HttpResponseRedirect, render
from django.urls import reverse, reverse_lazy
from .forms import CustomUserCreationForm, UserCreationForm
from django.contrib.auth.models import User
from .models import CustomUser, Profile

class Profile(DetailView):
    model = CustomUser
    template_name = 'users/user_profile.html'
    context_object_name = 'profile'

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'

'''
def SignUp(request):
    form = CustomUserCreationForm
    return render(request, 'registration/register.html', {'form': form})
'''    