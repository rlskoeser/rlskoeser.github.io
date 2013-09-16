---
layout: post
title: MOAI, an Open Access Server Platform for Institutional Repositories
created: 1251391572
categories: oai-pmh fedora-commons python
---
<p>http://pypi.python.org/pypi/MOAI</p><p>MOAI is a platform for aggregating content from different sources, and
publishing it through the Open Archive Initiatives protocol for
metadata harvesting.
It's been built for academic institutional repositories dealing with
relational metadata and asset files.</p><h2>Features</h2>
<p>MOAI has some interesting features not found in most OAI servers.
Besides serving OAI, it can also harvest OAI. This makes it possible
for MOAI to work as a pipe, where the OAI data can be reconfigured,
cached, and enriched while it passes through the MOAI processing.</p>
<p>More specifically MOAI has the ability to:</p>
<ul class="simple"><li>Harvest data from different kinds of sources</li><li>Serve many OAI feeds from one MOAI server, each with their own configuration</li><li>Turn metadata values into OAI sets on the fly, creating new collections</li><li>Use OAI sets to filter records shown in a feed, configurable for each feed</li><li>Work easily with relational data (e.g. if an author changes, the publication should also change)</li><li>Simple and robust authentication through integration with the Apache webserver</li><li>Serve assets via Apache while still using configurable authentication rules</li></ul>
