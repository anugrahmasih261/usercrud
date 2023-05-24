from .models import Signup

from rest_framework import serializers 

class SignupSerializer(serializers.ModelSerializer):
          image = serializers.ImageField(allow_null=True)
          class Meta:
                    model = Signup
                    fields = '__all__'
                    depth = 1


class PostAdd(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    class Meta:
        model= Signup
        fields= '__all__'



        