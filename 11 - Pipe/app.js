/*
 * Stream
 * Writable Stream -> to write data to Stream
 * Readable Stream -> to read data from Stream
 * Duplex -> can read and write to a Stream
 */

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.pipe(myWriteStream);