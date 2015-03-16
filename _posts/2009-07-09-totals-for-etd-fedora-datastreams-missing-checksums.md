---
layout: post
title: totals for ETD Fedora datastreams missing checksums
created: 1247179804
categories:
- fedora
- etd
---
<p>As part of my Fedora 3 migration work, I've done some initial investigation on datastreams that are missing checksums (since it's not clear if there's an easy way to calculate them programmatically, although there should be).</p><p>For the 1,878 ETD-related objects in my test Fedora 3 instance, here are the totals by datastream:</p><table border="0"><tbody><tr><td>PREMIS</td><td>327</td></tr><tr><td>RELS-EXT</td><td>2</td></tr><tr><td>POLICY</td><td>1513</td></tr><tr><td>DC</td><td>1442</td></tr><tr><td>MODS</td><td>327</td></tr><tr><td>XHTML</td><td>265</td></tr><tr><td>FILE</td><td>223</td></tr><tr><td>MADS</td><td>141</td></tr><tr><td>SKOS</td><td>1</td></tr></tbody></table><p>The FILE datastream is the only binary datastream here, and that's where we care about checksums the most.</p><p>A little backstory on this for those who don't know: Fedora 2 has a bug with the checksums that made it impossible to set the checksum on datastream updates.&nbsp; (Related problem discovered more recently: PHP SOAP doesn't set nulls properly; if I'd known this I may have been able to work around the Fedora bug.)&nbsp; So, basically any datastream that was updated after initial ingest lost its checksum.</p><p>I've already done some updates on this test data to clean up the RELS-EXT; I suspect this is why so few of them are missing checksums.</p><p>My next step is to see if I can find a way to set the checksum without creating a new datastream version.</p>
