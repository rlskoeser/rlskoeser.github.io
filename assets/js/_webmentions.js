/* fetch and display web mentions for a specified url (i.e., current page) */
function webmentions(url) {
  var current_url = window.location.href;  // or use just path ?
  var site_section = window.location.pathname.split('/')[1];
  console.log('site section ' + site_section);
  console.log(current_url);

  // add content to the webmentions div on post & update pages
  var div = $(".webmentions");
  var details = $('<div class="mention-details"/>');
  div.append(details);

  function display_mention(data) {
      var type = data.activity.type;
      // create a div for each mention
      mention = $('<div/>').attr('class', type);
      content = $(data.activity.sentence_html);
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


  // get local json
  $.getJSON("/assets/json/webmentions/" + site_section + ".json",
    function(data) {
      console.log('loaded local json');
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data[i].target);
        if (data[i].target.endsWith(window.location.pathname)) {
          console.log(data[i]);
          display_mention(data[i]);
        }
      }

  });

  $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
    target: url
  }, function(data){
    // if there are no links, nothing to do
    if (data.links.length == 0) {
      return;
    }

    // add content to the webmentions div on post & update pages
    var div = $(".webmentions");
    var details = $('<div class="mention-details"/>');
    var mention, content;
    var plural = (data.links.length == 1 ? '' : 's');
    div.append($('<span>' + data.links.length + ' mention' + plural + ': </span>'));

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

    var types = Object.keys(activity), type, count;
    for (var i = 0; i < types.length; i++) {
      type = types[i];
      count = activity[type];
      plural = (count == 1 ? '' : 's');
      if (type == 'reply' && count != 1) {
        type = 'replie';
      }
      div.append($('<span>' + count + ' ' + type + plural + '</span>').attr('class', types[i]));

      if (i != types.length -1 ) {
        div.append(', ');
      }
    }
    div.append(details);

  });

}