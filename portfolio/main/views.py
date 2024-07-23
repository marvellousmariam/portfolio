from django.shortcuts import render,get_object_or_404
from .models import Project,Tag



def home(request):
    projects=Project.objects.all()
    tages=Tag.objects.all()
    return render(request,"base.html",{"projects":projects,"tags":tages})




