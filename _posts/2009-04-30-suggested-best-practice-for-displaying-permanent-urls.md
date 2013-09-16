---
layout: post
title: Suggested best practice for displaying permanent urls
created: 1241126056
categories: web
---
<p>For content we produce and display online that has permanent urls or arks associated, I suggets that we display the link on the page in this format:</p><pre>Permanent url: <a href="http://pid.emory.edu/ark:/25593/16tnj">http://pid.emory.edu/ark:/25593/16tnj</a></pre><p>There is also an appropriate link rel tag that should be used, <strong>bookmark</strong>.  It should look something like this:</p><pre>&lt;a rel="bookmark" href="permanent url"&gt;permanent url&lt;/a&gt;</pre><p>Apparently, Google scans the text and looks for keywords like "permanent url," because if you search for a specific ETD records on Google (where I implemented this a while back), the first link in your search results is the permanent url, rather than url within the the etd.library.emory.edu site.  Other commonly terms, like "permalink" would probably work as well.</p><p>I tried to find if there are any actual standards for displaying permanent urls and couldn't find any.  If anyone is aware of any standards, or has other suggestions, please let the rest of us know!</p>
