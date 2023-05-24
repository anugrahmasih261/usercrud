from django.urls import path 

from . import views


urlpatterns = [ 
          path('', views.SignupList.as_view(), name='signup_list'),
          path('add/', views.SignupAdd.as_view(), name='signup_add'),
          path('update/<int:pk>/', views.SignupUpdate.as_view(), name='update'),
          path('delete/<int:pk>/', views.SignupDelet.as_view(), name='delete'),
          path('search/', views.SignupSearchView.as_view(), name='search'),
          path('check_user/', views.check_user, name='usercheck'),
        #   path('like/<int:post_id>/', views.LikeView, name='like_post'),



]



