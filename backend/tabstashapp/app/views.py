from django.shortcuts import render
from django.http.response import JsonResponse


from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

from app.serializers import CurrentUserSerializer, StashSerializer, LabelSerializer
from app.models import User, Stash, Label

# Create your views here.



class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


#### Extension requests


# POST request to create new label

@api_view(['POST'])
def create_label(request, *args, **kwargs):

    label_object = JSONParser().parse(request)
    serializer = LabelSerializer(data=label_object)
    print(label_object)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# POST request to create new stash

@api_view(['POST'])
def create_stash(request):

    stash_object = JSONParser().parse(request)
    serializer = StashSerializer(data=stash_object)
    print(stash_object)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # return Response(serializer.data)




# GET request to get existing labels for a given user id
@api_view(['GET'])
def get_labels_by_user(request, user_id: int):
    labels = Label.objects.filter(user_id=user_id)
    serializer = LabelSerializer(labels, many=True)

    return Response(serializer.data)





# GET request to get summarization from a given text



# GET request to get qna from a given question and text





#### Website requests


# Get user stashes (chronological)



# Get user stashes (filter by label)

