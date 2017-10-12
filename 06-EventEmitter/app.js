var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message) {
    console.log(message);
});

myEmitter.emit('someEvent', 'This is the message');