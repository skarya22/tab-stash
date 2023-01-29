from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Label(models.Model):

    # attribute
    name = models.CharField(max_length=168)

    # foreign key
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # many to many related name

    def __str__(self) -> str:
        return self.name



class Stash(models.Model):

    # Foreign key
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    # attributes
    text = models.TextField()
    url = models.CharField(max_length=2048)
    date_created = models.DateField()
    
    # many to many relation
    labels = models.ManyToManyField(Label)

    def __str__(self) -> str:
        return self.url
