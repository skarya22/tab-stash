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
        fields = ('name', 'user')

class StashSerializer(serializers.ModelSerializer):

    label = LabelSerializer(many=True)
    class Meta:
        model = Stash
        fields = ('user', 'text', 'url', 'date_created')



