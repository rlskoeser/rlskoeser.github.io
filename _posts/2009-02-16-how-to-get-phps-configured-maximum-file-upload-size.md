---
layout: post
title: How to get PHP's configured maximum file upload size
created: 1234808663
tags:
- php
- file upload
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/02/16/how-get-phps-configured-maximum-file-upload-size
permalink: /2009/02/16/how-get-phps-configured-maximum-file-upload-size/
---

Maximum file upload size is configured in the php.ini.  Confuguration values like this can be retrieved with the ini_get function, e.g.,

{% highlight php %}
ini_get("upload_max_filesize")
{% endhighlight %}

Sizes can be set in the php.ini file with php shorthand (K for Kilobytes, M for Megabytes, and G for Gigabytes); the [documentation for ini_get()](http://www.php.net/manual/en/function.ini-get.php) includes a function for converting these values to bytes, e.g. for use in a hidden MAX_FILE_SIZE form parameter (apparently not honored by all browsers and easy to bypass, but still recommended because it may at least keep some users from having to wait while attempting to upload a file that is too large and will be rejected anyway.
