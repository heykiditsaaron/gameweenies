from django.views.generic import DetailView, FormView, CreateView, TemplateView
from django.shortcuts import HttpResponseRedirect, render, get_object_or_404, HttpResponse
from django.urls import reverse, reverse_lazy
from .forms import CustomUserCreationForm, UserCreationForm
from django.contrib.auth.models import User
from .models import CustomUser, Profile
from django.template import loader
'''
class Profile(DetailView):
    model = CustomUser
    template_name = 'users/user_profile.html'
    context_object_name = 'profile'
'''
class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'

def ProfileView(request, slug):
    #template = loader.get_template=('users/user_profile.html')
    queryset = CustomUser.objects.filter(slug=slug).select_related('profile')
    model = get_object_or_404(queryset)
    
    context = {
        'profile': model,
        'private': model.profile.private,
        'title': model.displayname+"'s Profile",
        'type': "website",
        'description': model.profile.bio,
        'username': model.displayname,
        'date_joined': model.date_joined,
        'name': model.profile.get_full_name,
        'email': model.email,
        'location': model.profile.location,
        'birth_date': model.profile.birth_date,
        'bio': model.profile.bio,
    }
    return render(request, 'users/user_profile.html', context)
