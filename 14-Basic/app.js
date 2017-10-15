/*
 * Stream
 * Writable Stream -> to write data to Stream
 * Readable Stream -> to read data from Stream
 * Duplex -> can read and write to a Stream
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url == '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas') {
    var ninjas = [{name: 'name', age: 29}, {name: 'name2', age: 30}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '0.0.0.0');

console.log('Listening @ 0.0.0.0:3000');

// this is testing