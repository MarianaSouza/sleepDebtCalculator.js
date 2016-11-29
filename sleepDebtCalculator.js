function getSleepHours(day) {
 var hours = prompt("How many hours of sleep did you get on " + day + "?");
  return Number(hours);
}

function getActualSleepHours() {
  return getSleepHours("Monday") +
    getSleepHours ("Tuesday") + getSleepHours ("Wednesday") + getSleepHours ("Thursday") + getSleepHours ("Friday") + getSleepHours ("Saturday") + getSleepHours ("Sunday"); 
}

function getIdealSleepHours() {
  var idealHours = prompt('How much sleep would you prefer per night?');
  return Number(idealHours) * 7;  
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  }
  
  if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");  
 }
  
  if (actualSleepHours < idealSleepHours) {
    console.log("You got less sleep than needed. Get some rest.");  
 }
}

calculateSleepDebt();
