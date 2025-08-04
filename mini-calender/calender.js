const day = document.getElementById("day")
const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date();

// console.log(today);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednessday", "thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

day.innerHTML = weekDays[today.getDay()];
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();