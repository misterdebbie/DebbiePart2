function primeCheck(num) {
    var start = 2;
    var c = Math.floor(Math.sqrt(num));
    while (start <= c) {
        if (num % start === 0) {
            return false;
        }
        start++;
    }
    return true;
}

var dataLog = [];
var primeCount = 0;
var target = 10001;
for(var i = 2; primeCount < target; i++) {
    if (primeCheck(i)) {
        primeCount++;
        dataLog.push(i);
    }
}
document.getElementById("solved").innerHTML = "The " + primeCount + "st prime number is " + (i-1);

//console.log("The " + primeCount + "st prime number is " + (i-1));
//console.log(dataLog.length);
//var l = dataLog.length;
