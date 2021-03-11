import {cleanList} from './clean-list.js';

const closePopup = (modal, bodyNoScroll, isComments) => {
  modal.classList.add('hidden');
  bodyNoScroll.classList.remove('modal-open');
  if (isComments) {
    const socialComments = document.querySelectorAll('.social__comments');
    cleanList(socialComments);
  }
};

export {closePopup};
