const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")


const today = new Date();

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



date.innerHTML = (today.getDate()<10? "0" : "") + today.getDate();
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
day.innerHTML = weekDays[today.getDay()];