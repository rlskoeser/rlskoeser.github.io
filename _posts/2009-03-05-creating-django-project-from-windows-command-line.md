---
layout: post
title: Creating Django Project from Windows Command Line
created: 1236285836
categories: django
---
<p>The easiest way to start a Django project from windows command line is to use the full path name for the django-admin.py file in your startup statement.</p><p>example:</p><pre>python c:\Python26\Scripts\django-admin.py startproject timereports<br /><br /></pre><p>Putting Python and the python scripts directory allows you to initiate the Django scripts without the relavant path information.  This is recommended best practices and will make your life easier in general so go for it.</p><p>For the example above you would need to put 'c:\Python26' and ''c:\Python26\Scripts' in your path setting to be able to just type 'django-admin.py startproject &lt;project&gt;'</p>
