from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse, reverse_lazy
from django.shortcuts import render, HttpResponseRedirect

def Homepage(request):
    form = AuthenticationForm()
    return render(request, 'home.html', {'form': form})
