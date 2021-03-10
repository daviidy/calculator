const parseNumber = (number) {
    if (number.includes('.')) {
        result = parseFloat(number);
        return result;
    }
    else {
        result = parseInt(number);
        return result;
    }
};

export default parseNumber;