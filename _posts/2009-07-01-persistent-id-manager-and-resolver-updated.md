---
layout: post
title: Persistent ID Manager & Resolver updated
created: 1246468234
categories: pid django releases
---
<p>A new version of the Pid Manager has been released and deployed to production.&nbsp; This is a new version written in Django that duplicates the functionality of the previous Rails application.&nbsp; The application is now deployed over SSL and users can log in to the admin site with their netid and ldap password&nbsp; (an existing administrator has to grant edit permissions to new accounts).&nbsp; The new version of the site also implements a SOAP API with the same functionality provided by the old version.</p><p>Along with this release, we deployed a minor update to the Pid Resolver-- it now responds with a nice 404 page when you attempt to resolve an ARK or PID that it doesn't know about.</p><p>The site is at https://pid.emory.edu/</p>

<!--break-->
