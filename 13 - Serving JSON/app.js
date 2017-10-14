/*
 * Stream
 * Writable Stream -> to write data to Stream
 * Readable Stream -> to read data from Stream
 * Duplex -> can read and write to a Stream
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'Kaung',
        job: 'SE',
        age: 24
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening @ localhost:3000');