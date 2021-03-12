import operate from './operate';

const calculate = ({
  total,
  next,
  operation,
  live,
  reset,
}, buttonName) => {
  const data = {
    total,
    next,
    operation,
    live,
    reset,
  };
  if (reset === true) {
    data.reset = null;
  }
  switch (buttonName) {
    case 'AC':
      data.next = '';
      data.total = '0';
      data.operation = '';
      data.live = '';
      data.reset = null;
      break;

    case '+/-':
    case '%':
      if (next) {
        data.total = operate('0', next, buttonName);
      } else if (total) {
        data.total = operate('0', total, buttonName);
      }
      data.live = data.total;
      data.operation = '';
      data.next = data.total;
      break;
    case '÷':
    case '+':
    case '-':
    case 'X':
      if (operation && total && next) {
        data.total = operate(total, next, operation);
        data.operation = buttonName;
        data.next = '';
        data.live = data.total + buttonName;
      } else if (!operation && next) {
        data.operation = buttonName;
        data.total = next;
        data.next = '';
        data.live += buttonName;
      } else if (total && !operation && !next) {
        data.operation = buttonName;
        data.live += buttonName;
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
      if (reset === true) {
        data.next = buttonName;
        data.live = buttonName;
        data.reset = null;
      } else if (next) {
        data.next = next + buttonName;
        data.live = live + buttonName;
      } else {
        data.next = buttonName;
        data.live = data.live === null ? buttonName : data.live + buttonName;
      }
      break;
    case '=':
      if (total && next && operation) {
        data.total = operate(total, next, operation);
        data.next = '';
        data.operation = '';
        data.live = data.total;
        data.reset = true;
      }
      break;

    default:
      break;
  }
  return data;
};

export default calculate;
