---
layout: post
title: How to get PHP's configured maximum file upload size
created: 1234808663
categories:
- php
- file upload
---
<p>Maximum file upload size is configured in the php.ini.  Confuguration values like this can be retrieved with the ini_get function, e.g.,</p>
<pre>ini_get("upload_max_filesize")</pre>
<p>Sizes can be set in the php.ini file with php shorthand (K for Kilobytes, M for Megabytes, and G for Gigabytes); the <a href="http://www.php.net/manual/en/function.ini-get.php">documentation for ini_get()</a> includes a function for converting these values to bytes, e.g. for use in a hidden MAX_FILE_SIZE form parameter (apparently not honored by all browsers and easy to bypass, but still recommended because it may at least keep some users from having to wait while attempting to upload a file that is too large and will be rejected anyway.</p>
