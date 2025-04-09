from django.contrib import admin
from .models import MuscleGroup, Exercise

# Registruojame MuscleGroup ir Exercise modelius admin panelėje
admin.site.register(MuscleGroup)
admin.site.register(Exercise)