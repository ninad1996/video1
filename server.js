
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path= require('path');
app.get('/', function(req, res) {
res.sendFile('public/index.html', {root: __dirname});
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('Ninad is Online');
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('Ninad is Offline');
   });
});


http.listen(3000,'0.0.0.0'|| 'localhost', function() {
    console.log('Listening to port:  ' + 3000);
});