var fs = require('fs');

// fs.unlink('Write2.txt'); to DELETE file

// Sync
// fs.mkdirSync('Folder');
// fs.rmdirSync('Folder');

// Async
fs.mkdir('Folder', function() {
    fs.readFile('ReadMe.txt', 'utf8', function(err, data) {
        fs.writeFile('./Folder/WriteMe.txt', data);
    });
});

fs.rmdir('Folder'); // will give error because this is not empty;

// It has to remove the files in it first, then remove the Directory
fs.unlink('./Folder/WriterMe.txt', function() {
    fs.rmdir('Folder');
});