This is a simple node server that proxies requests to URLs that return JSON. Sometimes sites with JSON APIs don't support JSONP, which makes calling their API from client-side javascript a royal pain. Rather than creating an app-specific proxy for your client js, jsonproxy generically proxies any request and returns JSONP. Because it returns JSONP, you can call the proxy from any domain.

jsonproxy expects two URL parameters: an encoded URL to fetch JSON from, and the name of the callback function. Example usages:

    $.getJSON('http://<sever>:3003/?url=http%3A%2F%2Fwww.strava.com%2Fapi%2Fv1%2Frides%2F12345&callback=?', function(data){
			if(data.myObject)
				.....
		});
