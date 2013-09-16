---
layout: post
title: Rails Can't Modify Frozen String Error
created: 1246028836
categories: rails 2.02 ror
---
<p>After hours chasing my tail trying to resolve an error reported as "Can't Modify Frozen String" I have determined this is a bug in the webrick webserve in addtion to dispatch.fcgi as reported online.&nbsp; Switching from webrick to mongrel resolved the problem on my dev machine without any code changes</p>
