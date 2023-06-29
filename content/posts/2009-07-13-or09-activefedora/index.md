---
created: 1247493943
date: '2009-07-13T10:05:43'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/13/or09-activefedora
permalink: /2009/07/13/or09-activefedora/
summary: 'When Ruby Met Fedora: presentation on ActiveFedora by Matt Zumwalt of MediaShelf'
tags:
  - fedora
  - open-repositories
title: 'OR09: ActiveFedora'
url: /2009/07/13/or09-activefedora/
---

## When Ruby met Fedora: ActiveFedora

Matt Zumwalt. MediaShelf

view presentation materials: [http://hdl.handle.net/1853/28502](http://hdl.handle.net/1853/28502)

Matt Zumwalt's vision is for long-lived content with specialized views and interfaces for specific users-- treat the software as perishable but the data as durable. The goal is to allow us to focus on the user experience and not worry about infrastructure like Fedora. In fact, earlier in the Open Repositories conference Matt had a separate presentation on this idea: [Many Lightweight Views into Complex Repository Content: Enabling Rapid Application Development for Fedora Repositories](http://hdl.handle.net/1853/28418).</p>

ActiveFedora is not just a ruby wrappper for the Fedora APIs, but the equivalent of IRM for SQL dbs.

Why choose ruby instead of python?

* flexible, dynamic - introspection, add methods (relatively easy in python, but structures in ruby avaliable)
* jruby - lets you use java libraries; more stable and "cooler" than jython
* rails integration with prototype, scriptaculous, and now jquery

MediaShelf has built everything around real applications and projects. As they need new features for their clients, they build on to ActiveFedora. Currently ActiveFedora supports qualified Dublin Core (built-in right now, really should be a separate gem). They haven't yet done any work with MODS, but there are java libraries for MODS theat they can pull in through jruby. For agile development, ActiveFedora makes it easy to start Fedora and then throw things away (dev/test systems, throwaway objects); comes with a pre-fab Fedora with solr &amp; demo objects. ActiveFedora includs a solr service; serialize to solr functionality is handled by datastream models.

The idea is to hide complexity and make ActiveFedora look familiar to Ruby on Rails so that every developer doesn't have to be a Fedora expert.

[http://mediashelf.us/activefedora/](http://mediashelf.us/activefedora/)

* * *

Relevance/applicability for us? ActiveFedora is not directly applicable, since we are moving away from Rails and doing new development in Django; but MediaShelf's ActiveFedora may serve as a useful model or reference point as we will hopefully be working to create something similar in python. Also, there is considerable interest in this project in the Repositories community, and may be other groups and institutions working on a python-based project similar to this, so there are some possibilities for collaboration and creating a more general-purpose interface to Fedora to further this same goal of simplifying the process of creating quick, light-weight interfaces to Fedora content.