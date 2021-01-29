// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = function (min, max) {
  if (min >= max) {
    alert('Уважаемый пользователь -- первое чесло не может быть больше или равно второму чеслу!');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Функция для проверки максимальной длины строки.
const checkLength = function (str, maxLength) {
  if (str.length >= maxLength) {
    return false;
  } else {
    return true;
  }
}
