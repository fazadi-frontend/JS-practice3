function getToday() {
    var i = new Date();
    return {
        year: i.getFullYear(),
        month: i.getMonth() + 1, 
                         //  👆🏻cause js count the month from 0
        day: i.getDate()
    };
}
//👇🏻 I’ve built the function I needed, now it’s time to put it to use
var today = getToday();
var y = today.year;
var m = today.month;
var d = today.day;
console.log( y, m, d);

//Think of getToday as a cake recipe that gets baked on demand.🍰
//When we defined the function (the code above),
//we were just writing the recipe on paper
//no cake had been baked yet!
//Whenever we want to use that cake (today’s date),
//we need to execute the recipe which means adding parentheses () after its name to invoke it.
//The functions we write in JavaScript are like isolated rooms.

//When you define the variable today outside the getToday function, 
//getToday doesn’t have direct access to it.
//Each function should have its own scope. That’s why we define it again inside birthDate.👇🏻

                  // 👇🏻 Argument
function birthDate(birthYear, birthMonth, birthDay){
    var today = getToday()
    var age = today.year - birthYear;
    if (today.month < birthMonth  || 
        (today.month === birthMonth && today.day < birthDay)
    ){
      newage = age - 1;
    }
    return newage;

}
console.log(birthDate(2001, 6, 30));

//When you write Number["Y"], you’re telling JavaScript: 
//Hey, go into the Number object and fetch the property named “Y”.
//But you don’t actually have that!
//Number is a constructor function.
//To convert a value to a number, you need to use parentheses: Number(Y).




