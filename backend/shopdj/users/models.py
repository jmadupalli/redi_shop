from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):

    def create_user(self, name='', phone=None, email=None, password=None):
        """
        Creates and saves a User with the given phone and password.
        """
        if not phone or not password:
            raise ValueError('Invalid Required Fields')

        user = self.model(
            name=name,
            email=email,
            phone=phone,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, name='', phone=None, email=None, password=None):
        """
        Creates and saves a staff user with the given phone and password.
        """
        if not phone or not password:
            raise ValueError('Invalid Required Fields')

        user = self.create_user(
            name=name,
            email=email,
            phone=phone,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    username = None
    name = models.CharField(verbose_name='name',
                            max_length=100,
                            blank=True,
                            )
    email = models.EmailField(verbose_name='email address',
                              max_length=255,
                              unique=True,
                              null=True,
                              )
    phone_regex = RegexValidator(
        regex=r'^\+\d{8,15}$', message="Phone number must be entered in E164 format, Up to 15 digits allowed.")
    phone = models.CharField(validators=[phone_regex],
                             verbose_name='phone number',
                             max_length=16,
                             unique=True,
                             )
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'phone'

    REQUIRED_FIELDS = ['name', 'password']

    def __str__(self):
        if self.name:
            return self.name
        return self.phone

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_active(self):
        return self.active

    def has_perm(self, perm, obj=None):
        return self.is_staff

    def has_module_perms(self, app_label):
        return self.is_staff

    objects = UserManager()
