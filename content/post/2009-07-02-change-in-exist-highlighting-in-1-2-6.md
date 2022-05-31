---
layout: post
title: change in eXist highlighting in 1.2.6
created: 1246569532
tags:
- exist
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/02/change-exist-highlighting-126
permalink: /2009/07/02/change-exist-highlighting-126/
---

In testing the latest stable version of eXist on wilson, Alice and I noticed that all our keyword-in-context functionality on the various TEI sites was no longer working. When we looked at the xml output, it was pretty obvious that the output was not displaying properly because our search terms weren't being highlighted by eXist-- something that previously had happened automatically.

A little digging in the eXist documentation uncovered an option for highlighting matches. When we added this line to the beginning of the broken xquery, things started working again:

{% highlight xquery %}
declare option exist:serialize "highlight-matches=all";
{% endhighlight %}

Unfortunately, this means we will probably have to add this on all of the xqueries where we are expecting highlighting to work, until or unless we find a better solution.
