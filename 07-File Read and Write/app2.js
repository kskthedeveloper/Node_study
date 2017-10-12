var fs = require('fs');

fs.readFile('ReadMe.txt', 'utf8', function(err, data) {
    fs.writeFile('Write2.txt', data);
});