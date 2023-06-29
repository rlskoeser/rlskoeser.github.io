---
date: 2016-06-15 07:31:31-04:00
showTableOfContents: true
tags:
  - OR2016
  - open-repositories
title: 'OR2016 Developer Track 1: Platforms and Analytics'
url: /2016/06/15/devtrack-platforms-analytics/
---


Notes on developer prack presentations; highlights include open research evaluation metrics and robot usage statistics accuracy on repository content.

[Conference session description & abstracts](https://www.conftool.com/or2016/index.php?page=browseSessions&form_session=113)



## Mining Open Access publications in CORE

**Matteo Cancellieri, Lucas Anastasiou, Samuel Pearce, Nancy Pontika**

*Using a nice [Jupyter notebook](https://ipython.org/notebook.html) to present the API and interaction with it using Python.*

[CORE](https://core.ac.uk/) [API](https://core.ac.uk/services#api);  includes data dumps for text mining; other APIs provide analytics, etc.

Simple access to all entities: articles, repositories, journals.  (Repositories because this is an aggregrator.)
Search is powered by elasticsearch, so all of the lucene query syntax is available.

[Swagger](http://swagger.io/) provides powerful documentation for the API, with all the parameters etc in a live console.  Documentation not just as a static document but as a live test console.   Also includes client generation for multiple languages using the swagger API.

Aggregation makes it possible to look at broad trends, e.g. how many papers on a given topic in different repositories from different parts of the world-- although hard to know how to adjust for coverage (better for some places than others), or for repositories that are much lager and therefore have higher total numbers.

## Oxford vs Cambridge Contest: Collecting Open Research Evaluation Metrics for University Ranking

**Petr Knoth, Matteo Cancellieri, Drahomira Herrmannova**

*Another presentation using a nice ipython/jupyter notebook to present the API queries and data munging along with the results.*

How you can use your repository to benchmark your repository against another institution using freeely available services.

Use the CORE Api to generate a CSV file that will be enriched using Mendeley Catalog API to get information about readership - the number of readings on Mendeley who read a particular article, part of the altmetric (there are others also available); also use Microsoft Academic Graph, currently the world's largest collection of metadata about academic content with citation data (comparable in size to Scopus; more complete in some areas than others).

For [Mendeley](https://www.mendeley.com/), use the DOI as the identifier, and return the stats.  Total reader count, readers by country, etc.  Makes it possible to identify top articles based on readership (within Mendeley).

[Microsoft Academic Graph (MAG)](http://research.microsoft.com/en-us/projects/mag/) provides a citation matrix - lots of data, so load it as a sparse matrix.  Sum rows and columns to get the number of references made and how many tiems a paper is cited.  Most of the papers actually have zero citations - which could mean either no data, or the paper has never been cited.  Leaving these out for the purposes of calculating averages.  MAG is very transparent and allows you to investigate to see if there are gaps in the citations - Scopus has no such transparency.

Conclusion: we can easily make these kinds of insights and statistics freely available without paying for expensive, proprietary alt-metrics; working on creating dashboards to display information about these metrics.   (Building a tool to provide a dashboard like this for free, will be presented later at OR2016.)

## #iCanHazRobot?

**Joseph W. Greene**

Usage statistics as a way to market the service and attract more deposits, as well as a reporting metric to show return on investigation.  But accuracy is a problem, and filtering the robots is a problem.  DSpacea nd EPrints have native robot detection, but these techniques can be improved.

Robot detection has an exponential effect on usage stats accuracy repositories.

Experiment based on repository download data, manually checked to determine which accesses were robot or human, and simulating DSpace and Eprint robot detection algorithms to see how well they would perform on the same dataset.

**85%** of unfiltered repository downloads come from robots.  A lot of robot detection is based on sessions, but repositories don't really have sessions (find an article via search engine, download it, and leave).

A typical website has about 15% robot traffic.  OA journal has 40% robot traffic; OA repository, 85% (Internet Archive has 91% robot traffic).  This means that a little bit of work to improve robot detection has a huge impact on accuracy.  If you do *not* keep pace, as robot technology updates, it will get progressivly work.

Minho DSpace statistics add-on includes some basic machine learning, it stores what it learns when it identifies an agent as a robot.   EPrints has a double-click filter (repeat download of the same item within the same hour) - this filters out human behavior (repeat download is not a repeat read), but also meaningful for robot behavior.

Minho has manual checking that allows you to identify spikes in traffic, to investigate and discount robot traffic.  It allows you to track down odd usage manually.  Check it once a month, about an hour of work to improve usage accuracy by about 15%.

Porting Minho robot detection to other systems could be very effective; manual intervention, or tuning the double-click behavior could make huge differences.

## Beyond the Dashboard: Customized Analytics Reporting with Google APIs

**Elizabeth Krznarich**

Custom reports by mixing Google APIs with other sources.

Google Analytics is powerful, but has limitations - combining with other sources, automating things, missing data for things that don't have interactions, or other "crazy" use cases that don't fit what Analytics is designed for.  However, Google APIs  make it possible to do a lot more, combining analytics, Google Drive, and Google Sheets.

Query explorer is a powerful tool to test out your queries and explore your data before you start developing your application, and also provides convenient snippets to replicate the queries you construct so you can duplicate them in code.  Using python because Google provides lots of documentation and examples for using the APIs with Python, although the authentication is still painful.

Linking downloads to ORCID records associated with the DOIs.

[slides](http://github.com/lizkrznarich/OR2016), [demo site](http://orcid.github.io/or2016-ga)