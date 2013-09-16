---
layout: post
title: ETD Cert Renewed
created: 1259172219
categories: etd fedora keytool certificate
---
<p>I updated the cert to https://etd.library.emory.edu.&nbsp; I wanted to document for anyone else's information the steps taken to get fedora talking to ETD via https:</p><p>Once the cert is in apache and I go the website and down load the cert exporting it as a pem.&nbsp; I then import the pem into the multiple keystores that fedora has as well as the java cacerts. Some of the keystores may not be necessary, but I figure it doesn't hurt.&nbsp; In this case, I had to give the certs a alias since the default is taken.</p><p>cd $FEDORA_HOME/server<br />keytool -import -file /home/fedora22/etd11242009.pem -keystore truststore -alias mykey2<br />cd $FEDORA_HOME/client<br />keytool -import -file /home/fedora22/etd11242009.pem -keystore truststore -alias mykey2<br />cd $FEDORA_HOME/tomcat/conf<br />keytool -import -file /home/fedora22/etd11242009.pem -keystore keystore -alias mykey3</p><p>--as root:<br />keytool -import -file etd11242009.pem -keystore /usr/java/jre1.6.0_16/lib/security/cacerts -alias mykey3</p><p>&nbsp;</p>
