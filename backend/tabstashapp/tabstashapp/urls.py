"""tabstashapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from rest_framework import routers
from app import views
from app.views import GoogleLogin

router = routers.DefaultRouter()


urlpatterns = [
    path('admin/', admin.site.urls),

    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),

    #path('api/', include(router.urls)),

    path('label/createLabel', views.create_label),
    path('stash/createStash', views.create_stash),

    path('label/getLabels/<int:user_id>/', views.get_labels_by_user),
    path('text/getSummary', views.get_summary_from_text),
    path('text/getQna', views.get_answer_from_text_and_question),
    path('stash/getStashesByUser/<int:user_id>/', views.get_stashes_by_user),
    path('stash/getStashesByUserByLabel/<int:user_id>/<int:label_id>/', views.get_stashes_by_user_by_label),





    
    

]


"""
    path('', TemplateView.as_view(template_name="index.html")),
    path('accounts/', include('allauth.urls')),
    path('logout', LogoutView.as_view()),
    """
