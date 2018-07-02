var io = require('socket.io')(process.env.PORT);

console.log('listening on *:'+process.env.PORT);

io.on('connection', function(socket){
 console.log("User Online ("+socket.request.connection.remoteAddress+")\n");

 socket.on('message', function(data){
  if (data == '') { return false; }
  io.emit('message', data);
 });
 
 socket.on('disconnect', function(socket){
  console.log("User OffLine ("+socket.request.connection.remoteAddress+")\n");
 });
});

