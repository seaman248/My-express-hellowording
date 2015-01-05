var express = require('express'),
	app = express();

var names = {
	'john': 'admin',
	'mike': 'manager',
	'ivan': 'user'
}

app.listen(8080);
// Когда к приложению идет обращение методом GET, дерни callback-функцию
app.get('/', function(req, res){
	res.sendfile(__dirname+'/test.html');
});

app.get('/user/:name', function(req, res){
	var role;
	if(req.params.name in names)
		role = names[req.params.name];
	else role = 'Unknown role';
	res.write(role);
	res.end();
})