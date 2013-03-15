This is a simple node server that proxies requests to URLs that return JSON. Sometimes sites with JSON APIs don't support JSONP, which makes calling their API from client-side javascript a royal pain. Rather than creating an app-specific proxy for your client js, jsonproxy generically proxies any request and returns JSONP. Because it returns JSONP, you can call the proxy from any domain.

jsonproxy expects two URL parameters: an encoded URL to fetch JSON from, and the name of the callback function. Example usages:

    function proxiedURL(url){
        var proxy = 'http://<sever>:3003/?url=';
        return proxy + encodeURIComponent(url) + '&callback=?';
    }

    var url = proxiedURL('http://ireturnjson.com');
    $.getJSON(url, function(data){
        if(data.myObject)
	    .....
    });
