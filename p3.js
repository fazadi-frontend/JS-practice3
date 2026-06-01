function today(){
    var i = new Date();
    var Y = i.getFullYear();
    var M = String(i.getMonth() + 1).padStart(2, 0);
    // +1 cuse js count the month from 0
    // we need string to use padStrat
    // padStart its only for strings
    //padStart: The string length must be at least 2 characters; if it’s shorter, pad it on the left with `"0"`.
    var D = String(i.getDay() + 1).padStart(2, 0);
    return `${Y}-${M}-${D}`;
}
var y = Number["Y"];
var m = Number["M"];
var d = Number["D"];
console.log(y, m, d);




