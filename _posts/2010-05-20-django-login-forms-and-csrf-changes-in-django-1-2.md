---
layout: post
title: Django Login Forms and CSRF changes in Django 1.2
created: 1274386810
categories: django
---
<p>Just a heads up if you're using login forms for your Django application and migrating from Django 1.1 to 1.2.&nbsp; There's an additional change to make for Cross Site Request Forgery request to your login form.&nbsp; Note this does NOT effect login through the admin interface that I can find, just if you create a seperate login page within your app.&nbsp; Also be aware this change is at the template level, not the code level.</p><p>See the '<a href="http://docs.djangoproject.com/en/1.2/topics/auth/#django.contrib.auth.views.login" target="_blank">views_login</a>' section of the Django documentation for a full example.</p><p>The change itself is pretty simple and just requires you to put the {% csrf_token %} tag right after the initial form tag.&nbsp; Without this it seems the login page will through an error by default.</p>
