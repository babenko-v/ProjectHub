from django.urls import path
from .views import ProjectsListView

app_name = 'users'

urlpatterns = [
    path('', ProjectsListView.as_view(), name='projects'),
]