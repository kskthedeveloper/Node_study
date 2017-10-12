var fs = require('fs');

var readFile = fs.readFileSync('ReadMe.txt', 'utf8');

fs.writeFileSync('Write.txt', readFile);