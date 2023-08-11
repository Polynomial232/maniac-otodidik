from rest_framework import serializers

class UserSerializers(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()