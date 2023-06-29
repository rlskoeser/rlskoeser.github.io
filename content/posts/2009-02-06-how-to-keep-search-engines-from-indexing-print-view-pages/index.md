---
created: 1233959180
date: '2009-02-06T17:26:20'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/02/06/how-keep-search-engines-indexing-print-view-pages
tags:
  - web
title: How to keep search engines from indexing print-view pages
url: /2009/02/06/how-keep-search-engines-indexing-print-view-pages/
---


I discovered a while back that, for some ETD records, two different versions of the record summary page were indexed in Google-- the normal page you'd hope gets indexed _and_ the print view copy.  It's simple enough to fix this, and maybe it is obvious to everyone else, but I don't think we have any kind of standard or best practice for this, so I thought it might be worth documenting.

The header of the print view pages should include this line:

{{< highlight html  >}}
<meta name="robots" content="noindex,nofollow"/>
{{< / highlight >}}

It's less important but sounds like it is also useful/recommended to add a ``rel="nofollow"`` on links to print view pages.

I'm aware of the fact that we can create CSS specifically for printing, but I'm kind of ambivalent it.  My concerns are summed up pretty well by this article on [print-friendly css and usability](http://www.456bereastreet.com/archive/200509/printfriendly_css_and_usability/).  Also, I like the control that having a separate print layout affords-- not only do we not have to fight with shuffling and hiding pieces of what may well be a complicated layout, but in addition, for the kind of sites where it is appropriate, having a separate print page allows us to add extra stuff-- like auto-generating a citation for the web page with the date it was accessed.