---
created: 1241126056
date: '2009-04-30T17:14:16'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/04/30/suggested-best-practice-displaying-permanent-urls
permalink: /2009/04/30/suggested-best-practice-displaying-permanent-urls/
tags:
  - web
title: Suggested best practice for displaying permanent urls
url: /2009/04/30/suggested-best-practice-for-displaying-permanent-urls/
---


For content we produce and display online that has permanent urls or arks associated, I suggets that we display the link on the page in this format:

{{< highlight html  >}}
Permanent url: <a href="http://pid.emory.edu/ark:/25593/16tnj">http://pid.emory.edu/ark:/25593/16tnj
{{< / highlight >}}

There is also an appropriate link rel tag that should be used, **bookmark**.  It should look something like this:

{{< highlight html  >}}
<a rel="bookmark" href="permanent url">permanent url</a>
{{< / highlight >}}

Apparently, Google scans the text and looks for keywords like "permanent url," because if you search for a specific ETD records on Google (where I implemented this a while back), the first link in your search results is the permanent url, rather than url within the the etd.library.emory.edu site.  Other commonly terms, like "permalink" would probably work as well.

I tried to find if there are any actual standards for displaying permanent urls and couldn't find any.  If anyone is aware of any standards, or has other suggestions, please let the rest of us know!