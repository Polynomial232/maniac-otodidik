from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializers


# Create your views here.
@api_view(['GET', 'POST'])
def user(request):
    if request.method == 'POST':
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "test": "done"
            }, status=status.HTTP_201_CREATED)
        
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializers(users, many=True)
        return Response({
            "data": serializer.data
        }, status=status.HTTP_200_OK)