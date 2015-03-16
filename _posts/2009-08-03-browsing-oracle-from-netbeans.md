---
layout: post
title: Browsing Oracle from NetBeans
created: 1249314781
categories: []
---
<p>NetBeans has the capability to view databases directly; since I haven't had so much luck getting Oracle's sqldeveloper running in linux, I thought I'd try this instead.&nbsp; Seems to work great, now that I've got it configured.</p><p>I was working from the directions here:<br />http://xaop.com/blog/2007/12/15/how-to-browse-oracle-databases-from-within-netbeans/</p><p>I actually ended up using <strong>Oracle Thin (OCI8 with Service ID (SID))</strong> with this jdbc url in this format: <strong>jdbc:oracle:thin:@hostname:port:dbname</strong></p><p>Once I entered my username and password, NetBeans prompted me to select the schema, and I was connected and able to browse and query the data in my Emory Shared Data views.</p>
