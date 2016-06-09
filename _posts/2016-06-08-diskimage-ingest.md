---
title:  "Sipping from a Bag: Ingesting Disk Images with BagIt"
date: 2016-06-08T18:00:00-04:00
layout: post
excerpt: Disk image ingest workflow and rationale.  Content associated with a poster for OR2016.
tags:
- OR2016
- poster
extra_js:
- https://cdn.plot.ly/plotly-latest.min.js
---

{% include _toc.html %}

The following is content associated with a poster to be presented at [Open Repositories 2016.](http://or2016.net/)

* * *

## Why create Disk Images?

**Born-digital material is archival material, not a surrogate** for archival material (in the way that a digitized copy of a handwritten letter would be, for example). As such, the *archival principles of provenance, authenticity, and context apply* to born-digital materials.

Borrowing from techniques used in digital forensics, many archivists choose to capture forensic disk images of born-digital material as a way of adhering to these three important principles. This creates an **exact replica of the digital artifact at the bitstream level, thereby ensuring no inadvertent change or loss of data** during transfer. The creation of checksums can then be used to verify that the capture of a disk image has been successful, which helps to authenticate the data. Furthermore, disk imaging preserves filesystem metadata and, in cases where software is stored on the disk in question, associated representation information that can help identify and render files. Taken together, these benefits help archivists establish and document the provenance, authenticity, and context of born-digital archival material.

## Disk Image ingest workflow

{% include figure.html src="/images/posts/or/diskimage-ingest-workflow.png" caption="MD5 and SHA-1 checksums are generated when the bag is created.  The application uses fast BagIt validation, stores the MD5 and SHA-1 checksums in the PREMIS metadata generated from the bag, and passes the MD5 to Fedora for verification." class="callout" %}

## Why Use BagIt?

1. Acts as a protective wrapper during transfer.
2. Validation of entire package and contents.
3. Maintains provenance of the SIP (object + metadata that tracks chain of custody)
4. Checksum manifest, which supports multiple algorithms (e.g. both MD5 and SHA-1).

## The Landscape at Emory

436 disk images, 1.2 TB total *(includes migrated content)*

Average 2.8 GB, largest 298GB *(see charts below for more detail)*<br/>
E01, ISO, IMG, DD, TAR[*](#why-create-tar-files), AFF[†](#note-migrated), AD1[†](#note-migrated)

<a name="note-migrated">†</a>: migrated format


5% of all Rose Library manuscript collections contain some form of born digital content.  
<table>
<tr><td>Acquired Pre-2000</td><td>1%</td></tr>
<tr><td>Acquired 2000-2010</td><td>10%</td></tr>
<tr><td>Acquired 2010-2016</td><td>13%</td></tr>
</table>

## * Why Create TAR Files?

The capture of forensic disk images at Emory is not always possible. In conversations with donors, Rose Library archivists aim to be transparent about transfer methods and the fact that forensic disk imaging captures a complete replica of data can cause some anxiety for donors. In these instances, we capture specific files and directories using the TAR utility.

## Other Benefits of Disk Images

* Packages born-digital data, so that it can be safely moved without the risk of alteration.
* Removes the need to rely on aging and often obsolete media.
* Provides the means to create a complete copy of the data, for preservation purposes, without requiring that I interpret the data—this can then be done at my leisure as and when I have the resources and tools.
* Provides greater ease of emulation as an access point.

## File Size Distribution

{% include figure.html src="/images/posts/or/Fedora-file-sizes_comparative.png" caption="File size distribution by content type for current Emory reposited content." class="two-up" %}

{% include figure.html src="/images/posts/or/Fedora-file-sizes_comparative_logarithmic.png" caption="File size distribution by content type, logarithmic scale." class="two-up" %}

* * *

<div id="box-plot" style="width:650px;height:450px;"></div>
<div class="form-inline">
Scale:
<input type='radio' name='plot-scale' id="scale-linear" value='linear' checked="checked" /> <label for="scale-linear"> Linear</label>
<input type='radio' name='plot-scale' id="scale-log" value='log' /> <label for="scale-log"> Logarithmic</label>
</div>


## Credits

*todo*

<script>
$.getJSON( "{{ site.url }}/assets/json/repository_content_sizes.json", function( data ) {
    // data is structured for plotly box plot
/*    var plot_data = [
        {
            y: data['images'],
            name: 'Images',
            type: 'box',
        },
       {
            y: data['audio'],
            name: 'Audio',
            type: 'box',
        },
       {
            y: data['video'],
            name: 'Video',
            type: 'box',
        },
       {
            y: data['diskimage'],
            name: 'Disk Images',
            type: 'box',
        },
    ]; */

    var layout = {
    title: 'Distribution of File Sizes by Content Type',
    yaxis: {
        title: 'File size in bytes',
        autorange: true,
        zeroline: true,
        type: 'linear',
    },
    margin: {
        l: 50,
        r: 30,
        b: 30,
        t: 70
    },
    showlegend: true
};


    Plotly.newPlot('box-plot', data, layout);
});


$('input[name=plot-scale]').change(function(){
    // update y axis layout
    Plotly.relayout('box-plot', {
        yaxis: {
            type: $( 'input[name=plot-scale]:checked' ).val()
        }});
    // redraw to adjust to the new scale and display properly
    Plotly.redraw('box-plot');
});

</script>
