---
date: 2016-01-27 12:15:00-05:00
featured_image: /images/posts/rdx/osh-text-banner.png
featured_image_caption: Screenshot of [a page of *Original Sacred Harp* (1911)](http://readux.library.emory.edu/books/emory:r8qzb/pages/emory:r9dn7/) in [Readux](http://readux.library.emory.edu/) with some of the OCR text selected.
summary: Discussion of Readux’s invisible OCR text placement over page images for selection and annotation.
tags:
  - readux
thumbnail_image: /images/posts/rdx/osh-text-thumb.png
title: Putting Text on the Page
url: /2016/01/27/putting-text-on-the-page/
---


One of the projects I’ve had the privilege of working on over the last
year is [Readux](http://readux.library.emory.edu/) [[source code
on GitHub](https://github.com/emory-libraries/readux)], which aims to
make [Emory Libraries](http://web.library.emory.edu/) digitized books
discoverable by collection and available for research, scholarship, and
teaching. This work has been all the more gratifying because I worked on
an earlier version of the project that sadly never went into production
(see more on the [project history](http://readux.library.emory.edu/about/)).

One of the interesting technical challenges has been making both page
images and text available and useful.  There are plenty of “page-turner”
or “book reader” applications (e.g., [Internet Archive
BookReader](https://github.com/openlibrary/bookreader), or the
[IIIF](http://iiif.io/api/image/2.0/)
viewer [Mirador](http://projectmirador.org/)), but it inevitably it
seems they are written in a different progamming language, or difficult
to adapt, modify, and integrate into a larger application.  The
technologies underlying these applications are all probably pretty
similar: page images, scans or photographs of physical book pages, with
text somewhere that has been generated through OCR (optical character
recognition), usually used for search but not display, since OCR tends
to be unreliable.
{{< figure src="/images/posts/rdx/gbooks-textselect_preview.png" data-alt="/images/posts/rdx/gbooks-textselect.gif" caption="Text selection from a [page image](https://books.google.com/books?id=TaMEAQAAIAAJ&dq=centaur&pg=PA4#v=onepage&q&f=false) in the Google Books interface. *(click to view animation)*" class="callout threeqtrwidth" >}}
 Some of those interfaces (like the Internet Archive
BookReader) use the OCR to highlight search terms on the page image; the
Google Books interface provides a tool to select a portion of the image
and then it supplies the text from that section of the page.  This is a
pretty neat feature, but it’s not always as useful as you might want,
because you can only select images in rectangular shapes, which doesn’t
always match the text flow, and the interface doesn’t seem to be
designed to display large sections of text.

In Readux, we want the page content to be annotatable—both the images
and the text content—so we went a different route.  The OCR text is
put on the page, invisibly layered over the image. It’s positioned and
sized as close as possible to the original text on the image, based on
the information encoded in the OCR.  The text is kept invisible, because
even for the volumes where OCR works well, there are still enough errors
that it’s easier to read the image rather than the OCR (and in some
cases, the OCR is really quite terrible and unreadable).  Putting the
text on the page makes it easy for users to take advantage of web
browsers’ normal text functionality, such as the ability to search on
the page’s text or highlight it, either to copy it for pasting elsewhere
or for annotation.

{{< figure src="/images/posts/rdx/osh-textselect_preview.png" data-alt="/images/posts/rdx/osh-textselect.gif" caption="Text selection from the [preface](http://readux.library.emory.edu/books/emory:r8qzb/pages/emory:r8r6d/) of the [1911 Original Sacred Harp](http://readux.library.emory.edu/books/emory:r8qzb/) in [Readux](http://readux.library.emory.edu/) in [Readux](http://readux.library.emory.edu/). *(click to view animation)*" class="callout" >}}

I recently learned about [Project Naptha](https://projectnaptha.com/), a
new browser-based tool to identify and expose text within images.  The
result, when it works well,  looks remarkably similar to what
we’re doing in Readux—except that, instead of trying to find the text in
the image after the fact and on the fly, we’re providing access to the
text data that has already been generated.

## How it works

To start with, we wanted the text and position data in a common format.
So we wrote [XSLT](https://github.com/emory-
libraries/readux/blob/1.8.3/readux/books/ocr_to_teifacsimile.xsl) to
convert our OCR XML to [TEI facsimile](http://www.tei-c.org/release/do
c/tei-p5-doc/en/html/PH.html#PHFAX).   Because it’s intended to document
digital images of source materials,  TEI facsimile includes tags and
attributes that can fully describe the position and size of blocks and
text on the page.  This maps quite well to the positional data in our
OCR.  Our digitized volumes already include two major kinds of OCR XML
output: two versions of Abbyy OCR, and the newer
[METS/ALTO](https://www.loc.gov/standards/alto/).  As technologies and
standards change, we may eventually have other formats; but as long as
we can translate the information to TEI facsimile, we have a common
format that we can use.

Blocks of text are absolutely positioned within a container div that is
sized based on the page image.  The top and left coordinates of the text
div, as well as the height and width, are all calculated as percentages of the
full page image size (which is also stored in the OCR and TEI facsimile
XML).  Because we don’t have consistent font family or size data in the
OCR, the display font sizes are generated in a similar fashion.  A
rough, pixel-based font size is calculated based on the scale of the
original page image to the display size, but for browsers that support
viewport-based font sizes, a fontsize is calculated as a percentage of
the image, which is then scaled to the relative viewport size using
javascript.  In addition, the text spacing is adjusted with custom
javascript using CSS word-spacing and letter-spacing to fill the width
of the text block: for longer lines of text, this results in a fairly
close approximation of where the words are on the page image.  Because
each section of text is positioned using percentages, the text positions
adjust along with the image when it is resized responsively, and the
relative font height and text width javascript is set to run again after
the window is resized.

Sometimes it’s easier to understand things by looking at examples, so
here are some links for sample content in Readux and some of the code I
mentioned.  If you’re interested in the HTML layout and positioning, use
your browser developer tools on some Readux volume pages to inspect some
of the text content.

- A [page of music](http://readux.library.emory.edu/books/emory:r8qzb/page
s/emory:r9dn7/) from [1911 *Original Sacred Harp*](http://readux.library.emory.edu/books/emory:r8qzb/).
This volume has one METS/ALTO XML file for each page, with word-level position information.
  - [METS/ALTO](http://readux.library.emory.edu/books/emory:r8qzb/pages/emory:r9dn7/ocr/) for that page
  - [TEI facsimile](http://readux.library.emory.edu/books/emory:r8qzb/pages/emory:r9dn7/tei/) generated from the METS/ALTO
- A [page of text](http://readux.library.emory.edu/books/emory:7sr72/pages/emory:mtrp9/) from
[*Ladies First!*](http://readux.library.emory.edu/books/emory:7sr72/).  This volume has one Abbyy OCR XML for the entire volume, with line-level position information.
  - [Abbyy OCR](http://readux.library.emory.edu/books/emory:7sr72/ocr/) for the entire volume
  - [TEI facsimile](http://readux.library.emory.edu/books/emory:7sr72/pages/emory:mtrp9/tei/) generated from the appropriate page of the Abbyy OCR
- [Custom Django template tag code](https://github.com/emory-libraries/readux/blob/1.8.3/readux/books/templatetags/teifacsimile.py) that does the majority of the position and size calculations
- [Custom Javascript with textwidth and relativeFontHeight functions](https://github.com/emory-libraries/readux/blob/1.8.3/readux/books/static/js/page.js)


* * *

*Screen captures created with [GifGrabber](http://www.gifgrabber.com/); preview still images extracted using [EZGif](http://ezgif.com/split).*
{.small .caption}
