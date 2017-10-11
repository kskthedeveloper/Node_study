// normal function statement
function sayHi() {
    console.log('hi');
}
sayHi();

// function expression
var sayBye = function() {
    console.log('bye');
};
sayBye();

// pass function to one another
function callFunction(func) {
    func();
}
callFunction(sayBye);