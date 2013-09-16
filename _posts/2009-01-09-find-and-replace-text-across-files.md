---
layout: post
title: Find and replace Text across files
created: 1231524042
categories: sysadmin linux
---
<p>Just a useful line of code I used for global text replaces in a directory</p> <p><code>grep -lre 'pattern' . | xargs -d'\n' sed -i 's/from/to/g'</code></p> <p>This looks in the rirectory you're in for pattern and uses the 'from' and 'to' values for replacement..</p>
