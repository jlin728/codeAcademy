// 1
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
/*
let secretMessage = animals.map(function(animals){
  return animals[0];
});
console.log(secretMessage.join(''));
*/
//REFACTORED
let secretMessage = animals.map(animals=>animals[0]);
console.log(secretMessage.join(''));

// 2
let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
/*
let smallNumbers = bigNumbers.map(function(bigNumbers){
  return bigNumbers/100;
});
*/
//REFACTORED
let smallNumbers = bigNumbers.map(bigNumbers => bigNumbers/100);
console.log(smallNumbers);
