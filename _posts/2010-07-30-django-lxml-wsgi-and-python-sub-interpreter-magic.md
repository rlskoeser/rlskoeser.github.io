---
layout: post
title: Django, lxml, WSGI, and Python sub-interpreter magic
created: 1280532097
categories: django lxml cython apache wsgi python gil deadlock
---
<p>One of the applications we’ve been spending a fair chunk of time on here in the library is a user-friendly front-end to our <a href="http://www.fedora-commons.org/">fedora</a> repository. It’s built on internally-developed <a href="http://www.python.org/">Python</a> libraries for repository access, XML data mapping, and <a href="http://www.djangoproject.com/">Django</a> tie-ins. We’re aiming to opensource that library soon, but this post isn’t about that library. In fact, it’s only sort of about the application. This post is about an interesting problem we ran into this week when trying to deploy that application into our staging environment for testing.</p>

<p>See, we’ve made some great strides with development, and we’re ready to put them up so that our users—mostly our own librarians for now—can test them. Development has progressed smoothly under Django’s <code>manage.py runserver.</code>&nbsp;The other day, though, when we ran our application under apache, it surprised us by locking up hard.</p>

<p>Now, I can’t think of the last time I saw an http daemon freeze up like that, but it was clear that’s what was happening. The web request wasn’t returning anything (not even a 500 Internal Server Error). Browsers just sat there spinning. <a href="http://curl.haxx.se/">curl</a> sat waiting for a response. And eventually apache would give up and drop the connection. It was dead at the starting bell, and with no prior warning of any problems in development. We were confounded.</p>

<p>Debugging was an interesting experience, and I hope to post sometime about how that progressed. In the end, though, we figured out it was a design decision that made it happen. Here are the players in this drama:</p>

<p><a href="http://codespeak.net/lxml/">lxml</a> is a fine XML processing library for Python. We use it to process XML as we communicate with <a href="http://www.fedora-commons.org/">fedora</a>. We particularly picked it because it supports <a href="http://www.w3.org/TR/xpath/">XPath</a> expressions, <a href="http://www.w3.org/TR/xslt">XSLT</a>, and <a href="http://www.w3.org/XML/Schema">XML Schema</a>, and because it’s pretty darn portable with minimal fuss.

</p><p><a href="http://www.cython.org/">Cython</a> is a tool for gluing together C and Python. I started using a variant called <a href="http://www.cosc.canterbury.ac.nz/greg.ewing/python/Pyrex/">Pyrex</a> several years ago, and I happen to think the approach is a great one. lxml happens to use Cython internally. Most users will never need to know that fact, but it becomes relevant in a bit.</p>

<p><a href="http://www.djangoproject.com/">Django</a> is our web development framework of choice these days at Emory Libraries. It’s written in <a href="http://www.python.org/">Python</a>, which has given us a huge dose of flexibility, stability, and power in our development.</p>

<p><a href="http://code.google.com/p/modwsgi/">mod_wsgi</a> is how we deploy our Django code to production. There are <a href="http://docs.djangoproject.com/en/1.2/howto/deployment/">other options</a>, but we’ve found WSGI gives us the best mix of flexibility and stability so far.</p>

<p>Unfortunately, it was a combination of design decisions in those tools—particularly Cython, Python, and WSGI—that locked up our app.</p>

<p>The problem, it turns out, is subtle, but it stems from the use of Cython (via lxml) and <code>mod_wsgi</code> together. These can be made to work together, but it requires careful configuration to work around some incompatibilities. This is complicated by some further design decisions in Django, which I’ll say more about in a bit. First, lxml, Cython, and the simplified GIL interface.</p>

<p>Cython, as mentioned above, is a tool for gluing together C and Python. The idea is you write code that looks a lot like Python, but with a few C-like warts, and Cython compiles your code down to raw C. This is perfect for exposing C libraries in Pythonic idioms, and lxml uses it to great effect to provide its XML access. Now, Cython happens to use Python’s <a href="http://www.python.org/dev/peps/pep-0311/">simplified GIL interface</a> internally for locking. Unfortunately this means that it’s <a href="http://www.mail-archive.com/cython-dev@codespeak.net/msg04030.html">incompatible</a> with an obscure Python feature called <a href="http://docs.python.org/c-api/init.html#Py_NewInterpreter">sub-interpreters</a>. Most applications don’t need to use this feature. Most applications—notably including Django’s <code>manage.py runserver</code>—never notice or care.</p>

<p><code>mod_wsgi</code> is a perfect example of good <a href="http://code.google.com/p/modwsgi/wiki/ProcessesAndThreading#Python_Sub_Interpreters">use of sub-interpreters</a>. It uses them to allow apache admins to run lots of little WSGI-based web apps all in a single process, but still give each one its own Python environment. Without this, things like Django’s <a href="http://charlesleifer.com/blog/looking-registration-patterns-django/">model registration patterns</a>—along with similar global systems in many other Python libraries—would leave separate applications all interfering with each other.</p>

<p>Unfortunately, given that Cython-based libraries are incompatible with sub-interpreters, and given that <code>mod_wsgi</code> uses sub-interpreters, it follows logically that <strong>Cython-based libraries like lxml are incompatible with simple </strong><code><strong>mod_wsgi</strong></code><strong> configurations</strong>. In our case, this manifested as a single-thread self-deadlock in the Python Global Interpreter Lock whenever we tried to use our application at all. We were lucky: As the Python C-API docs say, <a href="http://docs.python.org/c-api/init.html#Py_NewInterpreter">“Simple things may work, but confusing behavior will always be near.”</a></p>

<p>Now, once that incompatibility is recognized and accepted, hope is not lost. If you’re only running a single WSGI application, your workaround might even be easy. You can force a <code>mod_wsgi</code> application to avoid the problem by forcing it into the <a href="http://code.google.com/p/modwsgi/wiki/ApplicationIssues">global application group</a>:</p>

<pre>WSGIApplicationGroup %{GLOBAL}</pre>

<p>If you want to run multiple WSGI applications, though, they might not play so well all together like that. Remember, as I described above, WSGI uses sub-interpreters to prevent applications from accidentally stepping on each other. Django applications, in particular, must run in separate sub-interpreters. If you want to run a couple of them, and they’re all incompatible with sub-interpreters, you need to keep them separate.</p>

<p>We’re just starting to deal with this problem, but it looks like <a href="http://code.google.com/p/modwsgi/wiki/ProcessesAndThreading#The_mod_wsgi_Daemon_Processes"><code>mod_wsgi</code> daemon processes</a> are just what the doctor ordered. What we’re looking at right now is using a separate <code>WSGIDaemonProcess</code> for each lxml-enabled Django site. According to <a href="http://code.google.com/p/modwsgi/wiki/ConfigurationDirectives#WSGIDaemonProcess">the docs</a>, this should eliminate sub-interpreter conflicts while still giving each application its own distinct interpreter space. Which will probably eat some system resources, but it’s better than locking up on every request.</p>

<p>I’ll update this post if the strategy turns out not to work. So far, though, I’m hopeful.</p>
