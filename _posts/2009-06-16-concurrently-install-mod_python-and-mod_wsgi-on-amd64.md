---
layout: post
title: Concurrently install mod_python and mod_wsgi on amd64
created: 1245169477
categories: linux sysadmin python django
---
<p><img src="http://thorkelin.library.emory.edu/~croddy/farnsworth.jpg" alt="Good news, everyone!" title="I've invented a device that makes you hear my voice in your head!" width="150" height="136" style="float: right; margin: 8px;" /></p><h2>Good news, everyone!</h2><p>We ran into problems concurrently installing mod_python (for the Persistent Identifiers resolver) and mod_wsgi (for the Django-based management application) into Apache on amd64. It appeared that the mod_wsgi build was insisting that I compile both Python 2.6 and mod_wsgi with -fPIC, which caused Apache to <a href="http://code.google.com/p/modwsgi/wiki/FrequentlyAskedQuestions#Apache_Process_Crashes">segfault continuously</a> upon startup. </p><p>As it turns out, the mod_wsgi build insists only that Python be compiled with -fPIC, and mod_wsgi itself must be compiled without.&nbsp;Using these CFLAGS it is possible to build a copy of mod_wsgi that gets along with mod_python in the same copy of Apache.</p><!--break-->
