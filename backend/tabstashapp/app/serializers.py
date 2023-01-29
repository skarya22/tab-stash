from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Stash, Label

class CurrentUserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id', 'first_name', 'last_name')

class StashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stash
        fields = ('')
        


"""

from functools import total_ordering
from rest_framework import serializers
# example serializer to serialize class to json
from fitgarageapp.models import WorkoutClass, CustomUser, CustomReview, Booking

class WorkoutClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutClass
        fields = ('id', 'name', 'instructor', 'description', 'start', 'end', 'enable')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'name', 'isAdmin', 'email', 'balance', 'password')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReview
        # fields = ('id', 'grade', 'comment')
        # fields = ('id', 'userid', 'workoutclassid', 'grade', 'comment')
        fields = ('id', 'username', 'classname', 'grade', 'comment')



class BookingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Booking
        fields = ('id', 'user', 'workoutClass', 'bookingDate')


"""
