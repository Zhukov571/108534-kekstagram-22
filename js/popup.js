// Функция создает popup
const popup = function (url, likes, description, comments) {
  const frame = document.querySelector('.big-picture__img');
  const likeCount = document.querySelector('.likes-count');
  const socialCaption = document.querySelector('.social__caption');
  const commentsCount = document.querySelector('.comments-count');

  frame.querySelector('img').src = url;
  likeCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments;
}

export {popup};

