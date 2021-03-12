import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result = '0';
  if (operation === '+') {
    result = x.plus(y).toString();
  } else if (operation === '-') {
    result = x.minus(y).toString();
  } else if (operation === '÷') {
    result = x.div(y).toString();
  } else if (operation === 'X') {
    result = x.times(y).toString();
  } else if (operation === '%') {
    result = y.div(100).toString();
  } else if (operation === '+/-') {
    result = y.times(-1).toString();
  }
  return result;
};

export default operate;
