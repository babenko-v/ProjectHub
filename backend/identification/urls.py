from django.urls import path
from .views import CustomTokenObtainPairView, CustomTokenRefreshView

app_name = 'identification'

urlpatterns = [

    # path('logout/', views.logout_view, name='logout'),
    # path('registration/', views.UserRegestrationView.as_view(), name='registration'),
    # path('login/', views.UserLoginView.as_view(), name='login'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]