---
layout: post
title: PDF generation in python/django
created: 1270483728
categories:
- python
- django
---
<p>The current MARBL finding aids website has a PDF generation feature that we need to duplicate or replace in the new django-based version of the finding aids site.&nbsp; Before assuming that we should continue using XSL-FO as before, I wanted to investigate other alternatives (especially since the current XSLT to generate XSL-FO depends on unmaintainable xslt for rendering EAD as html).</p><p>From my previous experience with PDF generation using XSL-FO (for MARBL finding aids and for Molecular Vision), these are the things I am looking for in a pdf generatoin tool.</p><div class="comment searchable">
        <p>
feature requirements:</p>
<ul><li>must be able to handle a fairly complicated layout (headers and
footers, different footer and no header on the first page); ability to
indicate that sections should stay together, etc.
</li><li>table formatting/layout (column width, etc.)
</li><li>handle unicode, special characters
</li></ul><p>features that would be nice to have:</p>
<ul><li>pdf generation that is quick enough even for large finding aids
to be able to generate pdfs on the fly (because we will have to add caching
otherwise)
</li><li>shared template/display logic for html and pdf versions of
the finding aid (a change to html display/style should be easy to
propagate to the pdf version, if not automatic)
</li><li>pdf outline for content in the document
</li><li>linking within the pdf
</li><li>embedded metadata </li></ul>
      </div><p>The Django documentation includes several suggestions for <a href="http://docs.djangoproject.com/en/dev/howto/outputting-pdf/">generating PDFs</a>; ReportLab looks very powerful, but in my opinion, but one of my assumptions going in is that we should choose a tool that will handle the page flow and layout for us, rather than having to specify where on a page a particular string should be displayed (that may work for reports and forms, but would be unwieldy for variable-length content like the finding aids). </p><p>For django-based PDF generation, <a href="http://www.xhtml2pdf.com/">Pisa XHTML2PDF</a> seems to be the most promising option.&nbsp; There is <a href="http://www.djangosnippets.org/snippets/659/">an example using pisa on django snippets</a>, complete with a "render_to_pdf" function. I was fairly quickly able to adapt existing django templates for displaying finding aids into a prototype PDF view and test all of the outliers of what I think we need to be able to handle.&nbsp; Pisa has custom tags that let you set your page layouts, and I was able to adapt this to the finding aids PDF layout (custom footer and no header on the first page, header aond footer on all other pages), although I don't think it would be possible to do the much more complicated MolVis layout with the current version of Pisa.</p><p>With my current prototype PDF, I was able to address all of my concerns with regard to finding aids pdf generation.&nbsp; Table display requires explicit column width to be set in the css, but I think the current html we're using for tables was based on a similar (but different) limitation in the previous PDF generation tool.&nbsp; With a few minor tweaks (change the character set to utf-8 in the render_to_pdf function, set the correct utf-8 charset in a meta tag in the html header), I was able to get accented characters to display correctly in the generated pdf.&nbsp; Pisa also auto-generates an outline of the PDF based on your html headings (and what is included can easily be customized by some of the pdf styles), which is a nice feature that we didn't have before.</p><p>I like this solution because for several reasons.&nbsp; It should allow us to share the bulk of our layout code for html and pdf display; it doesn't require learning a new technology or format, since html+css is already part of our core skillset (XSL-FO is cool and you can do a lot of neat things with it, but there is a learning curve as well).&nbsp; And, it may turn out to be more stable than our previous solution, since using Apache FOP with php required calling an external web service, and when things went wrong with this it was often difficult to troubleshoot.</p><p>Links to more resources:</p><ul><li><a href="http://www.xhtml2pdf.com/doc/pisa-en.html">Pisa documentation</a> - especially useful for custom css styles, layout examples<ul><li>pisa is available under GPLv2 - see http://www.xhtml2pdf.com/license</li></ul></li><li><a href="http://pypi.python.org/pypi/pisa/">http://pypi.python.org/pypi/pisa/</a> - python packages</li><li><a href="http://groups.google.com/group/xhtml2pdf/">http://groups.google.com/group/xhtml2pdf/</a> - google group, seems fairly active</li><li><a href="http://www.20seven.org/journal/2008/11/pdf-generation-with-pisa-in-django.html">another example using pisa with django</a></li></ul><p>Minimal installation instructions on ubuntu:</p><p style="padding-left: 30px;">sudo apt-get install python-reportlab python-html5lib<br />
sudo easy_install pisa</p>
