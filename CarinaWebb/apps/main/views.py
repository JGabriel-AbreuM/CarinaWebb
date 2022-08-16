from django.shortcuts import render
from django.views.generic import TemplateView
import requests
import json

class HomeView(TemplateView):
    template_name: str = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        req = requests.get(f"https://api.nasa.gov/planetary/apod?api_key=AtfiXpPGoL0GQiirY3LmfEjJfB56JSDam3c34DOL")
        dados = json.loads(req.text)

        context["dados"] = { 
            "url" : dados["url"],
            "titulo" : dados["title"] 
            } 
            
        return context