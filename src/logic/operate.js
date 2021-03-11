import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  if (operation === '+') {
    result = Big(numberOne + numberTwo);
  } else if (operation === '-') {
    result = Big(numberOne - numberTwo);
  } else if (operation === '÷') {
    result = Big(numberOne / numberTwo);
  } else if (operation === 'X') {
    result = Big(numberOne * numberTwo);
  } else if (operation === '%') {
    result = Big(numberTwo / 100);
  }
  return result;
};

export default operate;
