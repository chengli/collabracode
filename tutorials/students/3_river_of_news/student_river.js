var riverCallback = {
  "onsuccess" : function(obj) {
    // TODO
    log("SUCCESS: Loaded rss.json file");
    var title = document.getElementById("title");
    title.textContent = obj.rss.channel.title;
    var river = document.getElementById("river");
    //alert(obj.rss.channel.item[0]);
    //var item = obj.rss.channel.item;
    //var news = item[0];

	/*
    var news_item = document.createElement("div");
    var subtitle = document.createElement("p"); 
    subtitle.appendChild(document.createTextNode(news["title"]));
	news_item.appendChild(subtitle);
	
	river.appendChild(news_item);
	*/	
    var river_of_news = obj.rss.channel.item;
    for(items in river_of_news){
    	alert(items["title"]);
    	//var news_item = document.createElement("div");
   
    	//var subtitle = document.createElement("p"); 
    	//subtitle.appendChild(document.createTextNode(items["title"]));
		//news_item.appendChild(subtitle);
		
		//river.appendChild(news_item);
		
		    	
    }			
    
    
    //console.log(obj);
    
  },
  "onerror" : function(req) {
    log("ERROR: Unable to download rss.json file" + req);
  }
};
