// // Функция для проверки максимальной длины строки.
// const checkLength = function (str, maxLength) {
//   if (str.length >= maxLength) {
//     return false;
//   } else {
//     return true;
//   }
// }

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = function (min, max) {
  if (min >= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Функция, склеивает строки и число.
function makeStr(str1, number, str2) {
  return str1 + number + str2;
}

export {getRandomIntInclusive, makeStr};
