const isPalindrom = (string = '') => {
  const cleanText = string.replaceAll(' ', '').toLowerCase();
  return cleanText === [...string].reverse().join('').replaceAll(' ','').toLowerCase();
};
isPalindrom('Аргентина манит негра');
//Array.from(string);

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
const newResultLength = result.length = pad.length;
const actualPad = newResultLength <= minLength ? pad :
pad.slice(0, minLength - newResultLength);
result = actualPad + result;
  }
  return result;
}
