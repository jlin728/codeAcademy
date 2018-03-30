let day = 'Thursday';
let alarm;

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm : 'No alarm needed',
  weekAlarm : 'Alarm set to 7AM',
};
if (day === 'Saturday' || day === 'Sunday'){
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

// Dot notation
console.log(person.name);
// Bracket notation
console.log(person['age']);
// Calls a variable outside of method
console.log(person[alarm]);