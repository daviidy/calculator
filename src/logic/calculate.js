import parseNumber from './parseNumber';
import operate from './operate';

const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  const data = {};
  switch (buttonName) {
    case 'AC':
      data.next = '';
      data.total = 0;
      data.operation = '';
      break;

    case '+/-':
      if (next) {
        data.total = parseNumber(next) * -1;
      }
      else {
        return;
      }
      break;

    case '%':
      if (next) {
        data.total = operate(total, parseNumber(next), buttonName);
      }
      else {
        return;
      }
      break;

    case '÷':
    case '+':
    case '-':
    case 'X':
      if (operation && total && next) {
        data.total = operate(total, parseNumber(next), operation);
        data.operation = buttonName;
      } 
      else if (!operation && next) {
        data.operation = buttonName;
        data.total = parseNumber(next);
      }
      else if (!next && !total) {
        return;
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (next) {
        data.next = next + buttonName;
      } else {
        data.next = buttonName;
      }
      break;

    default:
      break;
  }

  return data;
};

export default calculate;
