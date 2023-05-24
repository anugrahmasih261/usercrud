from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponseRedirect


# Create your views here.

from .serializers import SignupSerializer
from .models import Signup
from rest_framework import generics 

class SignupList(generics.ListAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer



class SignupAdd(generics.CreateAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer



class SignupUpdate(generics.UpdateAPIView, generics.RetrieveAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer


class SignupDelet(generics.DestroyAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer


# for searching 

from rest_framework import generics
from .models import Signup
from .serializers import SignupSerializer

class SignupSearchView(generics.ListAPIView):
    serializer_class = SignupSerializer
    search_fields = ['username']

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryset = Signup.objects.all()

        if query:
            queryset = queryset.filter(username__icontains=query)

        return queryset




from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Signup

@api_view(['POST'])
def check_user(request):
    username = request.data.get('username', '')
    password = request.data.get('password', '')

    try:
        user = Signup.objects.get(username=username)
        if user.password == password:
            return Response({"exists": True})
        else:
            return Response({"exists": False})
    except Signup.DoesNotExist:
        return Response({"exists": False})




# def LikeView(request, post_id):
#     new_value = Signup.objects.get(id=post_id)
#     new_value.likes += 1
#     new_value.save()
#     return HttpResponseRedirect('/')