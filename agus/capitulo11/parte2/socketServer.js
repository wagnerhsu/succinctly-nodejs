var serverPort = 9099;
var net = require('net');

//criação do server socket
var server = net.createServer(function (client) {
    console.log('client connected');
    console.log('client IP Address: ' + client.remoteAddress);
    console.log('is IPv6: ' + net.isIPv6(client.remoteAddress));
    console.log('total server connections: ' + server.connections);

    // Waiting for data from the client.
    client.on('data', function (data) {
        console.log('received data: ' + data.toString());
        // Write data to the client socket.
        client.write('hello from server');
    });

    // Closed socket event from the client.
    client.on('end', function () {
        console.log('client disconnected');
    });
});

// tratando erros do socket
server.on('error', function (err) {
    console.log(err);
    server.close();
});

// indicando a porta que será executada
server.listen(serverPort, function () {
    console.log('server started on port ' + serverPort);
});
