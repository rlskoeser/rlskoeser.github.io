---
authors:
  - elizabeth_roke
  - dorothy_waugh
date: 2016-06-08 18:00:00-04:00
extra_js:
  - https://cdn.plot.ly/plotly-latest.min.js
showAuthor: true
showTableOfContents: true
summary: Disk image ingest workflow and rationale.  Content associated with a poster for OR2016.
tags:
  - OR2016
  - poster
thumbnail_image: /images/posts/or/diskimage-ingest-workflow-thumb.png
title: 'Sipping from a Bag: Ingesting Disk Images with BagIt'
url: /2016/06/08/diskimage-ingest/
---




The following is content associated with a poster to be presented at [Open Repositories 2016.](http://or2016.net/)

* * *

## Why create Disk Images?

**Born-digital material is archival material, not a surrogate** for archival material (in the way that a digitized copy of a handwritten letter would be, for example). As such, the *archival principles of provenance, authenticity, and context apply* to born-digital materials.

*  **PROVENANCE:** Documenting the history and context of an object
*  **AUTHENTICITY:** Establishing that the object is indeed what we say it is
*  **CONTEXT:** Representing the relationships between objects and the way in which they were created and used

Borrowing from techniques used in digital forensics, many archivists choose to capture forensic disk images of born-digital material as a way of adhering to these three important principles. This creates an **exact replica of the digital artifact at the bitstream level, thereby ensuring no inadvertent change or loss of data** during transfer. The creation of checksums can then be used to verify that the capture of a disk image has been successful, which helps to authenticate the data. Furthermore, disk imaging preserves filesystem metadata and, in cases where software is stored on the disk in question, associated representation information that can help identify and render files. Taken together, these benefits help archivists establish and document the provenance, authenticity, and context of born-digital archival material.

## Disk Image ingest workflow

{{< figure src="/images/posts/or/diskimage-ingest-workflow.png" caption="MD5 and SHA-1 checksums are generated when the bag is created.  The application uses fast BagIt validation, stores the MD5 and SHA-1 checksums in the PREMIS metadata generated from the bag, and passes the MD5 to Fedora for verification." class="callout" >}}

## Why Use BagIt?

1. Acts as a protective wrapper during transfer.
2. Validation of entire package and contents.
3. Maintains provenance of the SIP (object + metadata that tracks chain of custody)
4. Checksum manifest, which supports multiple algorithms (e.g. both MD5 and SHA-1).

## The Landscape at Emory

436 disk images, 1.2 TB total *(includes migrated content)*

Average 2.8 GB, largest 298GB *(see charts below for more detail)*<br/>
E01, ISO, IMG, DD, TAR[*](#why-create-tar-files){.fn}, AFF[†](#note-migrated){.fn}, AD1[†](#note-migrated){.fn}

<a name="note-migrated" class="fn">†</a>: migrated format


5% of all Rose Library manuscript collections contain some form of born digital content.  
<table>
<tr style="background-color: #d1e7f6"><td>Acquired Pre-2000</td><td>1%</td></tr>
<tr style="background-color: #a3ceed"><td>Acquired 2000-2010</td><td>10%</td></tr>
<tr style="background-color: #1cade4; color: white"><td>Acquired 2010-2016</td><td>13%</td></tr>
</table>

<a name="why-create-tar-files"></a>

## <span class="fn">*</span> Why Create TAR Files?

The capture of forensic disk images at Emory is not always possible. In conversations with donors, Rose Library archivists aim to be transparent about transfer methods and the fact that forensic disk imaging captures a complete replica of data can cause some anxiety for donors. In these instances, we capture specific files and directories using the TAR utility.

## Other Benefits of Disk Images

* Packages born-digital data, so that it can be safely moved without the risk of alteration.
* Removes the need to rely on aging and often obsolete media.
* Provides the means to create a complete copy of the data, for preservation purposes, without requiring that I interpret the data—this can then be done at my leisure as and when I have the resources and tools.
* Provides greater ease of emulation as an access point.

## File Size Distribution

One of the complexities we had to deal with to support disk image ingest was the wide range of file sizes.  The majority of our disk images are quite small, but a  handful of them are quite large, and disk images include the single largest file currently in our repository.

The difference in scale of file sizes makes it difficult to compare images, audio, video, and disk image content.  The linear box plot makes it clear how many outer values we have for disk images, and how they are fewer but much larger than video content.  The logarthmic scale makes it easier to compare the relative sizes of the smaller range of files, but makes it harder to grasp the true difference in scale at the higher end of the sizes.

{{< figure src="/images/posts/or/Fedora-file-sizes_comparative.png" caption="Box plot of file size distribution by content type for current Emory reposited content." class="two-up" >}}

{{< figure src="/images/posts/or/Fedora-file-sizes_comparative_logarithmic.png" caption="Box plot of file size distribution by content type, logarithmic scale." class="two-up" >}}

{{< figure src="/images/posts/or/Fedora-file-sizes_comparative_violin.png" caption="Violin plot of file size distribution by content type, logarithmic scale." class="callout halfwidth" >}}

The violin plot is an alternate way of  visualizing the same data, and it also makes it quite clear that the distribution of the disk image sizes are quite different from the other content we typically handle.

The presence of very large files, even though they are not the norm, meant we had to design a workflow that could handle them.  We addressed time out issues in the ingest process by using BagIt to generate MD5 and SHA-1 checksums ahead of time, using fast BagIt validation at the application level, storing both checksums in the PREMIS metadata and passing the MD5 checksum on to Fedora for verification.   That way, the checksum is only recalculated once during the ingest process (since checksumming a large file takes a correspondingly long time).  We also use file URIs and a shared network drive space accessible to staff curators, the web application managing ingest, and Fedora in order to transfer the content as efficiently as possible.

* * *

<div id="box-plot" style="width:650px;height:450px;"></div>
<form id="box-plot-controls">
Scale:
<label><input type='radio' name='plot-scale' value='linear' checked="checked" /> Linear</label>
<label><input type='radio' name='plot-scale' value='log' /> Logarithmic</label>
</form>


## Tools and Resources

* [FTKImager](http://accessdata.com/product-download/digital-forensics/ftk-imager-version-3.2.0), used to capture disk images; CLI version used to migrate AFF content to E01
* [BitCurator](https://www.bitcuratorconsortium.org/), used to capture disk images; includes BagIt
* [PREMIS](http://www.loc.gov/standards/premis/), for object technical metadata and history/provenance
* [BagIt](https://en.wikipedia.org/wiki/BagIt);  [bagit-python](https://github.com/LibraryOfCongress/bagit-python)

## Credits

Disk Image workflow designed and refined by Dorothy Waugh, Elizabeth Russey Roke, and Rebecca Sutton Koeser; software implementation in our [curation application, "The Keep"](https://github.com/emory-libraries/TheKeep) by Rebecca Sutton Koeser; python-bagit update to support SHA-1 and multiple checksum types in the manifest by Rebecca Sutton Koeser.

Thanks to Rob O'Reilly for assistance with statistical analysis and advice on the file sizes and for generating the box and violin plot images.

<script>
window.addEventListener("DOMContentLoaded", (event) => {

    fetch( "/assets/json/repository_content_sizes.json").then(response => response.json()).then(
    function( data ) {
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
            title: 'File size in GB',
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

    const scaleInput = document.querySelectorAll('input[name=plot-scale]');
    scaleInput.forEach(el => {
        el.addEventListener("change", (event) => {
        // update y axis layout
        Plotly.relayout('box-plot', {
            yaxis: {
                type: event.target.value
            }});
        // redraw to adjust to the new scale and display properly
        Plotly.redraw('box-plot');
    });
    });
});
</script>
