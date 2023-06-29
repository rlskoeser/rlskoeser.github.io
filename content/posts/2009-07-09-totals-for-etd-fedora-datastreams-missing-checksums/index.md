---
created: 1247179804
date: '2009-07-09T18:50:04'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/09/totals-etd-fedora-datastreams-missing-checksums
tags:
  - fedora
  - etd
title: Totals for ETD Fedora datastreams missing checksums
url: /2009/07/09/totals-etd-fedora-datastreams-missing-checksums/
---


As part of my Fedora 3 migration work, I've done some initial investigation on datastreams that are missing checksums (since it's not clear if there's an easy way to calculate them programmatically, although there should be).

For the 1,878 ETD-related objects in my test Fedora 3 instance, here are the totals by datastream:

<table border="0">
    <tbody>
        <tr><td>PREMIS</td><td>327</td></tr>
        <tr><td>RELS-EXT</td><td>2</td></tr>
        <tr><td>POLICY</td><td>1513</td></tr>
        <tr><td>DC</td><td>1442</td></tr>
        <tr><td>MODS</td><td>327</td></tr>
        <tr><td>XHTML</td><td>265</td></tr>
        <tr><td>FILE</td><td>223</td></tr>
        <tr><td>MADS</td><td>141</td></tr>
        <tr><td>SKOS</td><td>1</td></tr>
    </tbody>
</table>

The FILE datastream is the only binary datastream here, and that's where we care about checksums the most.

A little backstory on this for those who don't know: Fedora 2 has a bug with the checksums that made it impossible to set the checksum on datastream updates. (Related problem discovered more recently: PHP SOAP doesn't set nulls properly; if I'd known this I may have been able to work around the Fedora bug.) So, basically any datastream that was updated after initial ingest lost its checksum.

I've already done some updates on this test data to clean up the RELS-EXT; I suspect this is why so few of them are missing checksums.

My next step is to see if I can find a way to set the checksum without creating a new datastream version.