---
created: 1249314781
date: '2009-08-03T11:53:01'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/08/03/browsing-oracle-netbeans
permalink: /2009/08/03/browsing-oracle-netbeans/
title: Browsing Oracle from NetBeans
url: /2009/08/03/browsing-oracle-from-netbeans/
---

NetBeans has the capability to view databases directly; since I haven't had so much luck getting Oracle's sqldeveloper running in linux, I thought I'd try this instead. Seems to work great, now that I've got it configured.

I was working from the directions here: [http://xaop.com/blog/2007/12/15/how-to-browse-oracle-databases-from-within-netbeans/](http://xaop.com/blog/2007/12/15/how-to-browse-oracle-databases-from-within-netbeans/)

I actually ended up using **Oracle Thin (OCI8 with Service ID (SID))** with this jdbc url in this format: **jdbc:oracle:thin:@hostname:port:dbname**

Once I entered my username and password, NetBeans prompted me to select the schema, and I was connected and able to browse and query the data in my Emory Shared Data views.