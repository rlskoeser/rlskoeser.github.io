---
layout: post
title: Setting Up TinyMCE with Django Admin
created: 1282933938
categories: django
---
<p>There are a number of options out there for setting up a textarea in Django admin to use TinyMCE WYSIWYG editor (as well as FCKEditor).</p><p>The two main approaches I've seen out there are to either load TinyMCE and configure it to either use any text area or explicitly set id names to load under; Or to differentally load TinyMCE classes in the admin section by calling the Media Subclass of FormAdmin.&nbsp; I favor the latter approach (and will show a bit of that here) because it favors 'explicit over implicit' and only loads the additional javascript files when they are needed.</p><p>The method I use for loading TinyMCE into specific FormAdmin is as follows.</p><p>Download </p>
