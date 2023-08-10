from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer

# Create your views here.
class Posts(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveDestroyAPIView):
    pass