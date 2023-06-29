---
created: 1232135575
date: '2009-01-16T14:52:55'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/01/16/python-fuse-command-line-arguments
permalink: /2009/01/16/python-fuse-command-line-arguments/
tags:
  - python
  - fuse
title: python-fuse command-line arguments
url: /2009/01/16/python-fuse-command-line-arguments/
---



It took me a while to figure how to add custom arguments in python-fuse, so I want to document how I got it to work.  Maybe it would have been compeltely clear to someone who is not so new to python, but the examples didn't seem complete or obvious to me.

An important thing that helped me, buried in the <a href="http://fuse4bsd.creo.hu/fuse-python-0.2-doc/">python-fuse api docs</a>, is the "basic usage" statement for the Fuse class:

* instantiate
* add options to parser
* call parse
* call main

Here's an example of the code that adds a new option:

{{< highlight python  >}}
server.parser.add_option(mountopt="host",
    metavar="HOSTNAME", default=server.host,
    help="fedora server host name [default: %default]")
{{< / highlight >}}

 (_Note:_ This is in the ``main()`` function in the FedoraFs.py file; and server is an instance of the FedoraFS class.  This follows the structure of all the examples and tutorials I saw.)

Now when I run **./FedoraFs.py -h** I get an additional option:
``-o host=HOSTNAME       fedora server host name [default: localhost]``

The thing I couldn't figure out from the documentation and examples was how to actually use the values passed in on the command line.  Here's how I got it to work (there may be other or better ways):

1. Add the new options as variables to my fuse class and set the defaults in my init function, e.g.   ``self.host = "localhost"
2. Instruct parse to set option values in the current instance of FedoraFS fuse class:  ``server.parse(values=server, errex=1)``
3. Use options variables in fuse class main function, _after_ they have been set (rather than in the init).  In this case, it looks like this:

    {{< highlight python  >}}
    self.fedora = client.getClient("http://" + self.host + ":" + self.port + "/fedora",
       self.username, self.password, self.version)
    {{< / highlight >}}

Note that in the initial code sample where I am adding the option, I'm using the server variable server.host (unlike all the examples, which seem to use plaintext defaults here), so that I only have to define my default values once.  Perhaps it would also work to define the server variables in the init but leave them blank and let the parser set all the values (it's not clear to me if the parser sets all the values, including defaults, or only the non-defaults that are set by the user).