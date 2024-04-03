const isPalindrom = (string = '') => {
  const cleanText = string.replaceAll(' ', '').toLowerCase();
  return cleanText === [...string].reverse().join('').replaceAll(' ','').toLowerCase();
};
isPalindrom('Аргентина манит негра');


const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');


const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const commonLength = result.length + pad.length;
    const newPad = (commonLength > minLength) ? pad.substring(0, (commonLength - minLength)) : '';
    result = (newPad !== '' ? newPad : pad) + result;
  }

  return result;
};

myPadStart('q', 4, 'we');
