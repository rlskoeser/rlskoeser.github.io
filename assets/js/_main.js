/*! Responsive Menu */
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/
//  The function to change the class
var changeClass = function (r,className1,className2) {
  var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
  if( regex.test(r.className) ) {
    r.className = r.className.replace(regex,' '+className2+' ');
    }
    else{
    r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
    }
    return r.className;
};
//  Creating our button in JS for smaller screens
var menuElements = document.getElementById('site-nav');
menuElements.insertAdjacentHTML('afterBegin','<button type="button" role="button" id="menutoggle" class="navtoogle navicon-lines-button x" aria-hidden="true"><span class="navicon-lines"></span>menu</button>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function() {
  changeClass(this, 'navtoogle active', 'navtoogle');
};
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function(e) {
  var mobileButton = document.getElementById('menutoggle'),
    buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

  if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
    changeClass(mobileButton, 'navtoogle active', 'navtoogle');
  }
};

/*! Plugin options and other jQuery stuff */

// FitVids options
$(function() {
	$("article").fitVids();
});

// Table of Contents toggle
$(function() {
  $(".toc h3").click(function () {
    $("#drawer").toggleClass("js-hidden");
  });
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    callbacks: {
      elementParse: function(item) {
        /* customize element parse to display animated gif in data-alt if present */
        var data_alt = $(item.el).find('img').attr('data-alt');
        if (data_alt != undefined) {
          item.src = data_alt;
        }
      }
    }
  });
});


/* fetch and display web mentions for a specified url (i.e., current page) */
function web_mentions(url) {
  $.getJSON("http://webmention.io/api/mentions?jsonp=?", {
    target: url
  }, function(data){
    // if no links, nothing to do
    console.log(data);
    if (data.links.length == 0) {
      return;
    }

    // add content to the webmentions div on post & update pages
    var div = $(".webmentions");
    var details = $('<div class="mention-details"/>');
    var mention, content;

    div.append($('<span>' + data.links.length + ' mentions: </span>'));

    var activity = {}, type;
    for (var i = 0; i < data.links.length; i++) {
      type = data.links[i].activity.type;
      if (! (type in activity)) {
        activity[type] = 0;
      }
      activity[type]++;
      // create a div for each mention
      mention = $('<div/>').attr('class', type);
      content = $(data.links[i].activity.sentence_html);
      $.each(content, function(i, el) {
        // sentence description often includes full url to this page
        // strip it out if present, but add other pieces to a detail div
        if (type != 'link' && $(el).attr('href') == "{{ site.url }}{{ page.url }}") {
          return;
        }
        mention.append(el);
      })
      details.append(mention);
    }

    var types = Object.keys(activity), type, plural;
    for (var i = 0; i < types.length; i++) {
      type = types[i];
      plural = activity[type] == 1 ? '' : 's';
      div.append($('<span>' + activity[type] + ' ' + type + plural + '</span>').attr('class', types[i]));

      if (i != types.length -1 ) {
        div.append(', ');
      }
    }
    div.append(details);

  });

}