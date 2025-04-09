from django.db import models

class MuscleGroup(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name


class Exercise(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    steps = models.TextField()
    video_url = models.URLField(blank=True, null=True)  # Leidžiame, kad video_url būtų neprivalomas
    muscle_group = models.ForeignKey(MuscleGroup, related_name='exercises', on_delete=models.CASCADE)

    def __str__(self):
        return self.title