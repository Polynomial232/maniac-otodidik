from django.urls import path
from .views import Posts, PostDetail

app_name = "blog_api"

urlpatterns = [
    path('', Posts.as_view(), name='list_create'),
    path('<int:pk>/', PostDetail.as_view(), name='detail_create'),
]