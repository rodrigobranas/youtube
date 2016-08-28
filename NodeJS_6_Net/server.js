var net = require('net');

var connections = [];

var broadcast = function (message, origin) {
  connections.forEach(function (connection) {
    if (connection === origin) return;
    connection.write(message);
  });
};

net.createServer(function (connection) {
  connections.push(connection);
  connection.write('Hello, I am the server!');
  connection.on('data', function (message) {
    var command = message.toString();
    if (command.indexOf('/nickname') === 0) {
      var nickname = command.replace('/nickname ', '');
      broadcast(connection.nickname + ' is now ' + nickname);
      connection.nickname = nickname;
      return;
    }
    broadcast(connection.nickname + ' > ' + message, connection);
  });
  connection.on('end', function () {
    broadcast(connection.nickname + ' has left!', connection);
    connections.splice(connections.indexOf(connection), 1);
  });
}).listen(3000);