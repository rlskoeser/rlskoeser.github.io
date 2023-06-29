---
created: 1251318378
date: '2009-08-26T16:26:18'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/08/26/using-trac-queries-and-keywords-development-plans
permalink: /2009/08/26/using-trac-queries-and-keywords-development-plans/
tags:
  - trac
title: Using Trac queries and keywords for development plans
url: /2009/08/26/using-trac-queries-and-keywords-for-development-plans/
---

I figured out how to use keywords on Trac tickets and the TracQuery wiki macro so that a Development plan can be more dynamically updated if we add new tickets to a user story.  Here's how.

I edited my Trac tickets and added a keyword for the user story it belongs to, e.g. story:admin-report

I edited my development plan wiki page so that instead of linking to each ticket individually and manually, I used a trac wiki macro like this:
``[[TicketQuery(milestone=~1.4 Admin&amp;keywords=~story:admin-report, list)]]``

I'm limiting by milestone so that we don't have to be super careful about keeping the story keywords unique long-term, as long as they are unique for that particular milestone.

If you have tasks in a milestone that aren't associated with a story, you should be able to find them with something like this, by searching for tickets where keyword doesn't contain "story:".  (I don't have a case like this so I can't test it)
``[[TicketQuery(milestone=~1.4 Admin&amp;keywords=!~story:, list)]]``

The TicketQuery macro is pretty flexible on how the output can be formatted; I'm using the list for now because it's close to what I was doing before, but we could also consider using the table output and customizing which rows we want displayed (e.g., current status, who is working on it).  For more details, see the WikiMacros page on your trac instance ([https://larson.library.emory.edu/trac/ETD/wiki/WikiMacros](https://larson.library.emory.edu/trac/ETD/wiki/WikiMacros) on ETD).

Here is my updated Development Plan for ETD release 1.4 using this ticket query macro throughout:
[https://larson.library.emory.edu/trac/ETD/wiki/DevelopmentPlans/1.4](https://larson.library.emory.edu/trac/ETD/wiki/DevelopmentPlans/1.4)