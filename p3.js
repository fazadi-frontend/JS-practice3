function getToday() {
    var i = new Date();
    return {
        year: i.getFullYear(),
        month: i.getMonth() + 1, 
                         //  👆🏻cause js count the month from 0
        day: i.getDate()
    };
}
//When you write Number["Y"], you’re telling JavaScript: 
//Hey, go into the Number object and fetch the property named “Y”.
//But you don’t actually have that!
//Number is a constructor function.
//To convert a value to a number, you need to use parentheses: Number(Y).
var y = Number(Y);
var m = Number["M"];
var d = Number["D"];
console.log(y, m, d);




