---
layout: post
title: New Denyhosts configuration
created: 1251217591
categories: denyhosts linux sysadmin
---
<p>Today I have been deploying a new configuration for <a href="http://denyhosts.sourceforge.net" target="_blank" title="Denyhosts">Denyhosts</a> on all of our Linux boxes, upgrading those that were not running Denyhosts 2.6 to the most recent version. In the new configuration I have disabled the email notifications of blocked hosts, as they create a large amount of unnecessary traffic on <span class="tt">GLSYSMAIL-L</span>. I have also enabled the remote synchronization features of Denyhosts so that we may contribute information about those attempting to compromise our servers, and in turn receive the same information from others.</p>
