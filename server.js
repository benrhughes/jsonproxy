var express = require('express');
var app = express();
var http = require('http');

app.enable("jsonp callback", true);

app.get('/', function(req, res){
	var url = decodeURIComponent(req.query.url);
	console.log('Requested URL: ' + url);
	var data = '';

	http.get(url, function(r){
		r.setEncoding('utf-8');
		console.log('Status Code: ' + res.statusCode);

		r.on('data', function(chunk){
			data += chunk;
		});

		r.on('end', function(){
			res.jsonp(JSON.parse(data));	
		});
	});
});

app.listen(3003);
