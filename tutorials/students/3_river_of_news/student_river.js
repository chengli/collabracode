var riverCallback = {
  "onsuccess" : function(obj) {
    // TODO
    var body = $('<div></div>')
    $.getJSON("http://collabracode-js.appspot.com/rss.json",function(data){
    	var newsItem = data.rss.channel.item;
   		$.each(newsItem, function(key, val){
   			var news = $('<div></div>');
   			news.html('<br />'+'<b>'+val.title+'</b>' + '<br /> Link: ' + '<a>' + val.link + '</a>' + '<br /> Description: '+ val.description + '<br />');
   			body.append(news);
   						
   		});
    });
	console.log(body);

    $(function(){
    	$("#river").append(body);
    })
    console.log(body);
    log("SUCCESS: Loaded rss.json file");
  },
  "onerror" : function(req) {
    log("ERROR: Unable to download rss.json file" + req);
  }
};
