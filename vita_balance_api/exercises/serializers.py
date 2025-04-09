from rest_framework import serializers
from .models import Exercise, MuscleGroup

class MuscleGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = MuscleGroup
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    muscle_group = MuscleGroupSerializer()

    class Meta:
        model = Exercise
        fields = '__all__'