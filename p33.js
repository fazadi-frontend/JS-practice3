function getToday() {
    var i = new Date();
    return {
        year: i.getFullYear(),
        month: i.getMonth() + 1,
        day: i.getDate()
    };
}

// حالا تابع رو اجرا کن و بریز توی یک متغیر به اسم today
var today = getToday();

// حالا برای دسترسی به سال و ماه و روز از نقطه استفاده کن:
var y = today.year;
var m = today.month;
var d = today.day;

console.log("سال:", y, "ماه:", m, "روز:", d);
