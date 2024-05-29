from django.urls import path
from coreApp import views

app_name = "core"

urlpatterns = [
    path("", views.index, name='index')
]
