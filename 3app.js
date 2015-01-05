var express = require('express'),
	url = require('url'),
	request = require('request'),
	ejs = require('ejs');

var myIp = '185.68.22.39';
var app = express();

app.listen(3000);

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/google/feeds/for/:search', function(req, res){
	var search = req.params.search;
	var options = {
		protocol: 'https',
		host: 'ajax.googleapis.com',
		pathname: '/ajax/services/feed/find',
		query: {
			'v': '1.0',
			'userip': myIp,
			'q':search
		}
	};
	var toGoogle = url.format(options);
	console.log(toGoogle);

	request(toGoogle, function(err, reqres, body){
		var feeds = JSON.parse(body);
		res.render('google-search.ejs', {feeds: feeds.responseData, keyword: search});
	})


});