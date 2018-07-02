var io = require('socket.io')(process.env.PORT);

console.log('listening on *:'+process.env.PORT);

io.on('connection', function(socket){
 console.log("A new user is Online \n");



socket.on('add user', (username) => { 
 // we store the username in the socket session for this client 
socket.username = username; 
console.log("The user was call " + username + "\n");
socket.broadcast.emit('user joined', { 
username: socket.username
}); 
});

 socket.on('message', function(data){
  if (data == '') { return false; }
  io.emit('message', data);
 });
 
 socket.on('disconnect', function(socket){
  console.log("User OffLine ("+socket.username+")\n");
 });
});

