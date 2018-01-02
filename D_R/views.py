from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader


def openWelcome(request):
    template = loader.get_template('test.html')
    superheroes = {'Name':'Batman','Name2':'Superman'}
    context = {'person':'Ash','superheroes':superheroes}
    return HttpResponse(template.render(context, request))
