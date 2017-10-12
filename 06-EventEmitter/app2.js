var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var one = new Person('one');
var two = new Person('two');
var three = new Person('three');

var people = [one, two, three];

people.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(person.name + " said: " + message);
    });
});

one.emit('speak', 'This is from one');
two.emit('speak', 'This is from two');