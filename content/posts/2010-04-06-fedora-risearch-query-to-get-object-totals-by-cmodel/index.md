---
created: 1270588903
date: '2010-04-06T17:21:43'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2010/04/06/fedora-risearch-query-get-object-totals-cmodel
permalink: /2010/04/06/fedora-risearch-query-get-object-totals-cmodel
summary: ITQL query to get totals of objects in a Fedora Repository by content model.
title: Fedora RIsearch query to get object totals by cmodel
url: /2010/04/06/fedora-risearch-query-to-get-object-totals-by-cmodel/
---


I just figured out how to do a count query in iTQL (one of the triple query languages for the triplestore that we're using with Fedora) and want to document it so I don't lose it. This returns a list of content models and the number of active objects for each cmodel.

{{< highlight sparql  >}}
select $cmodel
count(select $item from <#ri>
where $item <info:fedora/fedora-system:def/model#hasModel> $cmodel
and $item <info:fedora/fedora-system:def/model#state> <fedora-model:Active>)
from <#ri>
where $item <info:fedora/fedora-system:def/model#hasModel> $cmodel
having $k0 <http://mulgara.org/mulgara#occursMoreThan> '0.0'^^<http://www.w3.org/2001/XMLSchema#double> ;
{{< / highlight >}}

Current totals for Fedora staging (where we have been testing the LSDI ingest - see the ScannedBook and ScannedVolume totals):

* info:fedora/emory-control:EtdFile-1.0, 1218
* info:fedora/fedora-system:FedoraObject-3.0, 6772
* info:fedora/emory-control:Hierarchy-1.0, 1
* info:fedora/emory-control:SmallpoxRecord-1.0, 354
* info:fedora/emory-control:SmallpoxImage-1.0, 207
* info:fedora/emory-control:ETD-1.0, 443
* info:fedora/emory-control:Collection-1.0, 14
* info:fedora/emory-control:AuthorInformation-1.0, 458
* info:fedora/emory-control:SmallpoxMSWord-1.0, 79
* info:fedora/emory-control:SmallpoxVideo-1.0, 80
* info:fedora/emory-control:SmallpoxAudio-1.0, 18
* info:fedora/fedora-system:ContentModel-3.0, 16
* info:fedora/fedora-system:ServiceDefinition-3.0, 10
* info:fedora/fedora-system:ServiceDeployment-3.0, 10
* info:fedora/emory-control:ScannedVolume-1.0, 2565
* info:fedora/emory-control:ScannedBook-1.0, 1680

Just for fun, current totals for Fedora in production:

* info:fedora/emory-control:EtdFile-1.0, 1469
* info:fedora/fedora-system:FedoraObject-3.0, 2960
* info:fedora/emory-control:Hierarchy-1.0, 1
* info:fedora/emory-control:SmallpoxRecord-1.0, 354
* info:fedora/emory-control:SmallpoxImage-1.0, 207
* info:fedora/emory-control:ETD-1.0, 524
* info:fedora/emory-control:Collection-1.0, 8
* info:fedora/emory-control:AuthorInformation-1.0, 572
* info:fedora/emory-control:SmallpoxMSWord-1.0, 79
* info:fedora/emory-control:SmallpoxVideo-1.0, 80
* info:fedora/emory-control:SmallpoxAudio-1.0, 18
* info:fedora/fedora-system:ContentModel-3.0, 14
* info:fedora/fedora-system:ServiceDefinition-3.0, 10
* info:fedora/fedora-system:ServiceDeployment-3.0, 9

related resources:

* [http://www.fedora-commons.org/confluence/display/FCR30/Triples+in+the+Resource+Index](http://www.fedora-commons.org/confluence/display/FCR30/Triples+in+the+Resource+Index)
* [http://docs.mulgara.org/itqlcommands/select.html](http://docs.mulgara.org/itqlcommands/select.html)