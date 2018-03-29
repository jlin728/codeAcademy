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
  