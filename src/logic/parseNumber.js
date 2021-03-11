/* eslint-disable radix */
const parseNumber = number => {
  let result = 0;
  if (number.includes('.')) {
    result = parseFloat(number);
    return result;
  }
  result = parseInt(number);
  return result;
};

export default parseNumber;
