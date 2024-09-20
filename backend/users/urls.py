from django.urls import path
from .views import ProductListView

app_name = 'users'

urlpatterns = [
    path('', ProductListView.as_view(), name='users'),
]