import {description, message, authorName} from './data.js';
import {getRandomIntInclusive, makeStr} from './utils.js';

// Функция, создает массив с фотографиями пользователей.
const photosArray = new Array(25).fill(null).map(function (index) {
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
    },
  };
});

photosArray();

