from django.urls import path
from django.conf import settings
from dashboards.views import DashboardsView, CrearItem, EditarItem, IndexItem

app_name = 'dashboards'

urlpatterns = [
    path('', DashboardsView.as_view(template_name = 'pages/dashboards/index.html'), name='index'),

    path('crear', CrearItem.as_view(template_name = 'pages/CRUD/template-crear.html'), name='crear'),

    path('editar', EditarItem.as_view(template_name = 'pages/CRUD/template-editar.html'), name='editar'),

    path('indexitem', IndexItem.as_view(template_name = 'pages/CRUD/template-index.html'), name='indexItem'),

    path('error', DashboardsView.as_view(template_name = 'non-exist-file.html'), name='Error Page'),
]