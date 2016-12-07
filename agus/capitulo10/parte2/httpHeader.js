var http = require('http');

var server = http.createServer(function (req, res) {
    // print request header
    console.log(req.headers);

    // set response header
    res.setHeader('AppId', '123456');

    // send response
    res.write('Welcome to http nodejs');
    res.end();
});

server.listen(8084);
console.log('Server is running on port 8084');
