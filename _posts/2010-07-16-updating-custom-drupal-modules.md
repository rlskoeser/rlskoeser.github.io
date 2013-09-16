---
layout: post
title: Updating Custom Drupal Modules
created: 1279304451
categories: drupal module custom update
---
<p>I wrote a custom drupal module a while back and recently had the need to make changes to the code and custom database tables associated with the module.<br />However, I could not get the update_hook to be reconized when I ran the update script from the website.</p><p>Here is how I solved the problem:</p><p>1. My module was named with all caps. <strong>DO NOT DO THIS!</strong><br />I had to rename the module directory, module files, hook names, and all references to them to lowercase which was a small pain.</p><p>2. There must be a version number in the module.info file, and furthermore it must be in sync with the update_ hook name that you want to run.</p><p>For example:</p><p>The info file has to have these two attributes:<br />core = 6.x<br />version = 6.x-1.1</p><p>The first pat of of the version is the same as the core attribute, and the second part is the version number.</p><p>The update hook has to be named like this:</p><p>function module_update_6110()</p>
