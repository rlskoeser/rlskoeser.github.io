---
layout: post
title: MySQL and Python 2.6 on Windows
created: 1250532736
categories: mysql python windows
---
<p>The current <a href="http://www.codegood.com/archives/4" target="_blank">mysql-python</a> library only supports Python 2.5 for Windows at this time and attemptes to compile it manually have been failing for me due to what appears to be incorrect code looking for a registry key in the win setup file.</p><p>Thankfully I found a solution over on the <a href="http://www.codegood.com/">codegood</a> blog that offers <a href="http://www.codegood.com/archives/4" target="_blank">Win32 and Win64 compiles</a> of this library that work fine with python 2.6.&nbsp; I installed these on my windows boxes and have my Django projects using MySQL instead of sqlite3.</p><p>&nbsp;</p>
