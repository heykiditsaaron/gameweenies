from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse, reverse_lazy
from django.shortcuts import render, HttpResponseRedirect

def Homepage(request):
    form = AuthenticationForm()
    context = {
        'title': "Game Weenies",
        'form': form,
        'type': "website",
        'description': "Game Weenies is a gaming community for people. Sometimes also not people."
    }
    return render(request, 'home.html', context)
