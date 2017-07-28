/* fetch and display web mentions for a specified url (i.e., current page) */
function webmentions(url) {
  var current_url = window.location.href;  // or use just path ?
  var site_section = window.location.pathname.split('/')[1];
  console.log('site section ' + site_section);
  console.log(current_url);

  // add content to the webmentions div on post & update pages
  var details = $('.mention-details'),
    summary = $('.mention-summary');

  function cleanup() {
    // bridgy mentions include current page url, which is very redundant
    // and hard to read; remove it for likes, replies, and retweets
    details.find('.like a[href$="' + window.location.pathname + '"]').remove();
    details.find('.repost a[href$="' + window.location.pathname + '"]').remove();
    details.find('.reply a[href$="' + window.location.pathname + '"]').remove();
  }

  function summarize_mentions() {
      var activity = {}, type,
        mentions = details.children('div');
        summary.children().remove();
      if (! mentions.length) {
        return;
      }
      summary.append($('<span>' + mentions.length + ' mentions.</span>').attr('class', 'total'));


      $.each(mentions, function(i, el) {
        type = $(el).attr('class');
        // count instance of activity
        if (! (type in activity)) {
          activity[type] = 0;
        }
        activity[type]++;
      });
      console.log(activity);

    var types = Object.keys(activity), type, count, plural;
    for (var i = 0; i < types.length; i++) {
      type = types[i];
      count = activity[type];
      plural = (count == 1 ? '' : 's');
      if (type == 'reply' && count != 1) {
          type = 'replie';
      }
      summary.append($('<span>' + count + ' ' + type + plural + '</span>').attr('class', types[i]));
    }

    cleanup();
  }

  function display_mention(data) {
      // create a div for each mention
      if ($('#' + data.id).length) {
        console.log('id already exists ' + data.id);
        return;
      }
      mention = $('<div/>').attr('class', data.activity.type).attr('id', data.id);
      content = $(data.activity.sentence_html);
      console.log(content);
      console.log(data.data.content);
      $.each(content, function(i, el) {
        mention.append(el);
      })
      if (data.activity.type == 'link' || data.activity.type == 'reply') {
        console.log(data);
        var srcdiv = $('<div/>').attr('class', 'source');
        srcdiv.append($('<a/>').attr('href', data.data.url).text(data.data.url));
        mention.append(srcdiv);
      }
      details.append(mention);

  }


  // get local json
  $.getJSON("/assets/json/webmentions/" + site_section + ".json",
    function(data) {
      console.log('loaded local json');
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        // console.log(data[i].target);
        if (data[i].target.endsWith(window.location.pathname)) {
          // console.log(data[i]);
          display_mention(data[i]);
        }

      }
      summarize_mentions();
  });

  $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
    target: url
  }, function(data){
      // if there are no links, nothing to do
      if (data.links.length == 0) {
        return;
      }
      // add content to the webmentions div on post & update pages
      var details = $('.mention-details');

      for (var i = 0; i < data.links.length; i++) {
        display_mention(data.links[i]);
      }

      summarize_mentions();
      /*


    var mention, content;
    var plural = (data.links.length == 1 ? '' : 's');
    div.append($('<span>' + data.links.length + ' mention' + plural + ': </span>'));

    var activity = {}, type;
    for (var i = 0; i < data.links.length; i++) {
      display_mention(data[i]);



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

    } */
    // div.append(details);

  });

}