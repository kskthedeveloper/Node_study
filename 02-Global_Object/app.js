console.log('Testing');

//set Timeout
//set Interval

var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log(time + ' seconds have been passed');

    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname);
console.log(__filename);