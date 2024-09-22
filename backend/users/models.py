from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class Programming_area(models.Model):
    name_programming_area = models.CharField(max_length=50, verbose_name='type_programming', unique=True)

    class Meta:
        db_table = 'prog_area'
        ordering = ['name_programming_area', ]

    def __str__(self):
        return self.name_programming_area

class Role(models.Model):
    name_role = models.CharField(max_length=50, verbose_name='role', unique=True)

    class Meta:
        db_table = 'role'
        ordering = ['name_role', ]

    def __str__(self):
        return self.name_role


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required field')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Хешируем пароль
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(unique=True, max_length=50, verbose_name='username')
    email = models.EmailField(unique=True)
    github_link = models.URLField(max_length=200, blank=True, null=True)

    programming_area = models.ForeignKey(to=Programming_area, on_delete=models.PROTECT, blank=True, null=True,
                                         verbose_name='programming_area')
    role = models.ForeignKey(to=Role, on_delete=models.PROTECT, blank=True, null=True, verbose_name='role')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'user'
        ordering = ['id', ]

    def __str__(self):
        return self.email
