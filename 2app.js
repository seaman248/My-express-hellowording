var express = require('express'),
	app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

var names = {
	'john': 'admin',
	'mike': 'manager',
	'ivan': 'user'
}

app.listen(8080);

app.get('/', function(req, res){
	res.sendfile(__dirname+'/test.html');
});

app.get('/user/:name', function(req, res){
	var role;
	if(req.params.name in names)
		role = names[req.params.name];
	else role = 'Unknown';
	res.render('user', {
		name: req.params.name,
		role: role
	});
})