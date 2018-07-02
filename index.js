var io = require('socket.io')(process.env.PORT);

console.log('listening on *:'+process.env.PORT);

io.on('connection', function(socket){
 console.log("User Online ("+socket.request.connection.remoteAddress+")\n");



socket.on('add user', (username) => { 
 // we store the username in the socket session for this client 
socket.username = username; 
socket.broadcast.emit('user joined', { 
username: socket.username
}); 
});

 socket.on('message', function(data){
  if (data == '') { return false; }
  io.emit('message', data);
 });
 
 socket.on('disconnect', function(socket){
  console.log("User OffLine ("+socket.request.connection.remoteAddress+")\n");
 });
});

