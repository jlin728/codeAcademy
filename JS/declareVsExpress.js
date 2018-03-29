  // FUNCTION DECLARATION
  /*
  function isGreaterThan(numberOne, numberTwo){
    if(numberOne > numberTwo){
      return true;
    }else{
      return false;
    }
  }
  */


  // FUNCTION EXPRESSION

  const isGreaterThan = (numberOne, numberTwo) => {
    if(numberOne > numberTwo){
      return true;
    }else{
      return false;
    }
  };

  console.log(isGreaterThan(1000125, 456113));

/* FUNCTION EXPRESSION
const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
}

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');


REFRACTORED concise body - removed parentheses, {}, and return is implicit */

const volumeOfSphere = diameter => (1/6)*Math.PI*diameter*diameter*diameter;

console.log("The volume of a sphere is " + volumeOfSphere(25) + " cubic centimeters");