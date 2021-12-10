// setting up date to show on the top of the page
const today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
console.log(today.toString());