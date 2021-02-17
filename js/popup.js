import {cleanList} from './clean-list.js';

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

// Функция закрытия popup по клику мыши
const closeModalByClick = (modal, bodyNoScroll) => {
  const closePopup = document.querySelector('#picture-cancel');
  closePopup.addEventListener('click', function() {
    modal.classList.add('hidden');
    bodyNoScroll.classList.remove('modal-open');
    const socialComments = document.querySelectorAll('.social__comments');
    cleanList(socialComments);
  });
};

// Функция закрытия popup при нажатии клавишы Esc
const closeModalByKey = (modal, bodyNoScroll) => {
  document.addEventListener('keydown', function(evt) {
    if (evt.key === ('Escape' || 'Esc')) {
      modal.classList.add('hidden');
      bodyNoScroll.classList.remove('modal-open');
      const socialComments = document.querySelectorAll('.social__comments');
      cleanList(socialComments);
    }
  });
};

export {popup, closeModalByClick, closeModalByKey};

