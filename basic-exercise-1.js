1. Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22

var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var prepend = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepend ===)
function showTime(){
  console.log("Today is: "+dayNames[day]);
  console.log("Current time is: "+hour + " " + "prepend" +": " +min +": " +sec);
};
