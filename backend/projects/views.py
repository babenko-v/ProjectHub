from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from users.models import CustomUser
from .serializers import ProjectsSerializer

class ProjectsListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectsSerializer
    queryset = CustomUser.objects.all()
