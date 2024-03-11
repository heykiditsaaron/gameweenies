from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.urls import reverse_lazy, reverse
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone, text
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver

from .managers import CustomUserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    displayname = models.CharField(_('displayname'), max_length=45, unique=True)
    slug = models.SlugField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['displayname']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        self.slug = text.slugify(self.displayname)
        super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.displayname
    
    def get_short_name(self):
        return self.displayname
    
    def get_absolute_url(self):
        return reverse('profile', kwargs={'slug': self.slug})

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    private = models.BooleanField(default=False)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=25)
    birth_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=30, blank=True)
    bio = models.TextField(max_length=500, blank=True)

    def __str__(self):  # __unicode__ for Python 2
        return self.user.displayname
    
    def get_full_name(self):
            full_name = '%s %s' % (self.first_name, self.last_name)
            return full_name.strip()
    
    # Not needed for now
    '''
    def get_absolute_url(self):
        return reverse_lazy('profile-view', kwargs={'pk': self.pk})
    '''

@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    try:
        instance.profile.save()
    except ObjectDoesNotExist:
        Profile.objects.create(user=instance)
    

@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()