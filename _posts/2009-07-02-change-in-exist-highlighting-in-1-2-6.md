---
layout: post
title: change in eXist highlighting in 1.2.6
created: 1246569532
categories:
- exist
---
<p>In testing the latest stable version of eXist on wilson, Alice and I noticed that all our keyword-in-context functionality on the various TEI sites was no longer working.&nbsp; When we looked at the xml output, it was pretty obvious that the output was not displaying properly because our search terms weren't being highlighted by eXist-- something that previously had happened automatically.</p><p>A little digging in the eXist documentation uncovered an option for highlighting matches.&nbsp; When we added this line to the beginning of the broken xquery, things started working again:</p><pre>declare option exist:serialize "<span class="option">highlight-matches=all</span>";</pre><p>Unfortunately, this means we will probably have to add this on all of the xqueries where we are expecting highlighting to work, until or unless we find a better solution.</p>
