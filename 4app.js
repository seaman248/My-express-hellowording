var socket = require('socket.io'),
	express = require('express');

var app = express();
var io = socket.listen(app.listen(3000));


app.get('/', function(req, res){
	res.sendfile(__dirname+'/index.html');
});

io.sockets
	.on('connection',function(client){
		console.log('Connected');
		// client.emit('message', {hello:'Guest'});
		client.on('hello', function(data){
			client.emit('hello',{hello: 'Привет '+data});
			client.broadcast.emit('hello', {hello: 'Привет от '+data});
		});
	});
