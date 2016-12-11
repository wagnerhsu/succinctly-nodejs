// create o webserver chamando createServer() com o handler como parametro
var app = require('http').createServer(handler),
    // objeto do socket.io passado dentro do objeto http
    io = require('socket.io').listen(app),
    fs = require('fs')
// abrindo a porta
app.listen(8098);
console.log('server started on port 8098');

// função handler manipulando o request response para enviar o index
function handler(req, res) {
    // index sendo passada
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

// esperando pela informação que virá com o evento de resposta (feedback)
io.sockets.on('connection', function (socket) {
    socket.emit('news', {
        content: 'news from server'
    });

    socket.on('feedback', function (data) {
        console.log(data);
        socket.emit('news', {
            content: 'news - ' + new Date()
        });
    });
});
