---
layout: post
title: FindingAids Unit test
created: 1275063669
categories: projects
---
<p>FindingAids contains two parts: FindingAids itself and the eulcore library it depends on.</p><p>The unit test of this project have different strategies for these two part too.</p><ul><li>FindingAids </li></ul><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Since it's based on Django frame work. The unit test follows <a href="http://docs.djangoproject.com/en/dev/topics/testing/">Django unit test style</a>. </p><ul><li><a href="http://waterhouse.library.emory.edu:8080/hudson/job/python-eulcore/javadoc/index.html">Eulcore</a></li></ul><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It's partly based on Django, for those part eulcore.django.*, follow the Djanjog unit test style. </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; For the rest, just run the scripts directly. Such as python test/test_xmlmap/test_ead.py </p>
