---
title: "{{ replace (replace .Name (.Date | time.Format "2006-01-02-") "") "-" " " | title }}"
date: {{ .Date }}
description: ""
authors:  # add any external authors; create data/authors/firstname_last.json file if new
  - author2
  - author2
extra_js:  # add any extra js needed for this page
  - 
showAuthor: true   # for multi/alternate author: include author or not
showTableOfContents: true
summary: 
tags:
  - tag1
  - tag2
# thumbnail_image: add image in post bundle; include "thumbnail" in filename
# featured_image: add image in post bundle; include "featured" in filename
featured_image_caption:   # not yet supported
original_url:   # link to original if cross-posted from another site
url: # relative url for current site; only specify when needs to be customized
---
