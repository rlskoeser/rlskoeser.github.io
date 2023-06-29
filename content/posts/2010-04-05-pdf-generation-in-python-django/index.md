---
created: 1270483728
date: '2010-04-05T12:08:48'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2010/04/05/pdf-generation-pythondjango
permalink: /2010/04/05/pdf-generation-pythondjango/
tags:
  - python
  - django
title: PDF generation in python/django
url: /2010/04/05/pdf-generation-in-python-django/
---


The current MARBL finding aids website has a PDF generation feature that we need to duplicate or replace in the new django-based version of the finding aids site. Before assuming that we should continue using XSL-FO as before, I wanted to investigate other alternatives (especially since the current XSLT to generate XSL-FO depends on unmaintainable xslt for rendering EAD as html).

From my previous experience with PDF generation using XSL-FO (for MARBL finding aids and for Molecular Vision), these are the things I am looking for in a pdf generatoin tool.

feature requirements:

* must be able to handle a fairly complicated layout (headers and
footers, different footer and no header on the first page); ability to
indicate that sections should stay together, etc.
* table formatting/layout (column width, etc.)
* handle unicode, special characters

features that would be nice to have:

* pdf generation that is quick enough even for large finding aids
to be able to generate pdfs on the fly (because we will have to add caching
otherwise)
* shared template/display logic for html and pdf versions of
the finding aid (a change to html display/style should be easy to
propagate to the pdf version, if not automatic)
* pdf outline for content in the document
* linking within the pdf
* embedded metadata

The Django documentation includes several suggestions for [generating PDFs](http://docs.djangoproject.com/en/dev/howto/outputting-pdf/); ReportLab looks very powerful, but in my opinion, but one of my assumptions going in is that we should choose a tool that will handle the page flow and layout for us, rather than having to specify where on a page a particular string should be displayed (that may work for reports and forms, but would be unwieldy for variable-length content like the finding aids).

For django-based PDF generation, [Pisa XHTML2PDF](http://www.xhtml2pdf.com/) seems to be the most promising option. There is [an example using pisa on django snippets](http://www.djangosnippets.org/snippets/659/), complete with a "render_to_pdf" function. I was fairly quickly able to adapt existing django templates for displaying finding aids into a prototype PDF view and test all of the outliers of what I think we need to be able to handle. Pisa has custom tags that let you set your page layouts, and I was able to adapt this to the finding aids PDF layout (custom footer and no header on the first page, header aond footer on all other pages), although I don't think it would be possible to do the much more complicated MolVis layout with the current version of Pisa.

With my current prototype PDF, I was able to address all of my concerns with regard to finding aids pdf generation. Table display requires explicit column width to be set in the css, but I think the current html we're using for tables was based on a similar (but different) limitation in the previous PDF generation tool. With a few minor tweaks (change the character set to utf-8 in the render_to_pdf function, set the correct utf-8 charset in a meta tag in the html header), I was able to get accented characters to display correctly in the generated pdf. Pisa also auto-generates an outline of the PDF based on your html headings (and what is included can easily be customized by some of the pdf styles), which is a nice feature that we didn't have before.

I like this solution because for several reasons. It should allow us to share the bulk of our layout code for html and pdf display; it doesn't require learning a new technology or format, since html+css is already part of our core skillset (XSL-FO is cool and you can do a lot of neat things with it, but there is a learning curve as well). And, it may turn out to be more stable than our previous solution, since using Apache FOP with php required calling an external web service, and when things went wrong with this it was often difficult to troubleshoot.

Links to more resources:
* [Pisa documentation](http://www.xhtml2pdf.com/doc/pisa-en.html) - especially useful for custom css styles, layout examples
    * pisa is available under GPLv2 - see http://www.xhtml2pdf.com/license
* [http://pypi.python.org/pypi/pisa/](http://pypi.python.org/pypi/pisa/) - python packages
* [http://groups.google.com/group/xhtml2pdf/](http://groups.google.com/group/xhtml2pdf/) - google group, seems fairly active
* [another example using pisa with django](http://www.20seven.org/journal/2008/11/pdf-generation-with-pisa-in-django.html)

Minimal installation instructions on ubuntu:
``sudo apt-get install python-reportlab python-html5lib``
``sudo easy_install pisa``