from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Stash, Label

class CurrentUserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id', 'first_name', 'last_name')


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = ('id', 'name', 'user')

class StashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stash
        fields = ('id', 'user', 'text', 'url', 'stash_type', 'date_created', 'labels')





