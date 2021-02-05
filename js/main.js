const description = [
  'Кто сдесь?',
  'Как-то так...',
  'Многабукав мало толку...',
  'Оупс...',
  'Кагдила?',
  'Вот эт я понимаю...'
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const authorName = [
  'Вася',
  'Мессер',
  'Максим',
  'Тёщя',
  'Лейла',
  'Лана'
];

// Функция для проверки максимальной длины строки.
const checkLength = function (str, maxLength) {
  if (str.length >= maxLength) {
    return false;
  } else {
    return true;
  }
}

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = function (min, max) {
  if (min >= max) {
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Функция, склеивает строки и число.
function makeStr(str1, number, str2) {
  return str1 + number + str2;
}

// Функция, создает массив с фотографиями пользователей.
const photosArray = new Array(25).fill(null).map(function (currentValue, index) {
  console.log(currentValue, index);
  return {
    id: index + 1,
    url: makeStr('photos/', index + 1, '.jpg'),
    description: description[getRandomIntInclusive(1, description.length - 1)],
    likes: [getRandomIntInclusive(15, 200)],

    comments: {
      id: index + 1,
      avatar: makeStr('img/avatar-', [getRandomIntInclusive(1, 6)], '.svg'),
      message: message[getRandomIntInclusive('', message.length - 1)],
      name: authorName[getRandomIntInclusive('', authorName.length - 1)],
    }
  };
});
console.log(photosArray);
