from django.shortcuts import render
from django.http import HttpResponse
from  django.shortcuts  import  render
# Create your views here.

# def index(request):
#     return HttpResponse("hello,world")

from  django.shortcuts  import  render

from  django.shortcuts  import  render

def  homepage(request):
    return  render(request=request,
    template_name= 'login.html',)
   
