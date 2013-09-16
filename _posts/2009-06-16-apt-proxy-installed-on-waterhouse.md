---
layout: post
title: Apt-proxy installed on Waterhouse
created: 1245188490
categories: ubuntu sysadmin linux debian
---
<p>I have installed <strong>apt-proxy</strong>&nbsp;on Waterhouse, which is a utility server* that also runs a copy of Hudson that Ben and I have been working on configuring. By using the local APT proxy you can help to reduce loads on remote Ubuntu and Debian mirrors and get faster access to updates once they have been cached on the local proxy.</p><p>To configure your system to use the APT proxy, you must have an IP address that is within Emory's campus (<span class="tt">170.140.0.0/16</span>). Simply replace the hostname of your primary APT mirror (probably something like u<span class="tt">s.archive.ubuntu.com</span><span class="tt"> </span>or<span class="tt"> </span><span class="tt">ftp.us.debian.org</span>) with <strong class="tt">waterhouse.library.emory.edu:9999</strong>&nbsp;throughout <span class="tt">/etc/apt/sources.list</span>. Please note that if you do not add port 9999 to the end of the URL you will not be able to connect to the APT proxy.</p><!--break--><p>I have already configured all the Ubuntu machines to which I have root access to use the new APT proxy.</p><p><em>*workstation on my desk</em></p>
