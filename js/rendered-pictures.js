import {popup, closeModalByClick, closeModalByKey} from './popup.js';
import {renderedSocialComments} from './social-comments.js';

//DOM елемент #picture
const renderedPictures = function (arr) {
  const pictures = document.querySelectorAll('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('a');
  const fragment = document.createDocumentFragment();
  const userModal = document.querySelector('.big-picture');
  const hiddenSocialComments = document.querySelector('.social__comment-count');
  const hiddenCommentsLoader = document.querySelector('.comments-loader');
  const bodyNoScroll = document.querySelector('body');

  closeModalByClick(userModal, bodyNoScroll);

  for (let i = 0; i < arr.length; i++) {
    const element = template.cloneNode(true);

    element.firstElementChild.src = arr[i].url;
    element.lastElementChild.children[1].textContent = arr[i].likes;
    fragment.appendChild(element);
    const descriptionImg = arr[i].description;
    const comments = arr[i].comments;
    element.lastElementChild.children[0].textContent = arr[i].comments.length;

    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      userModal.classList.remove('hidden');
      hiddenSocialComments.classList.add('hidden');
      hiddenCommentsLoader.classList.add('hidden');
      bodyNoScroll.classList.add('modal-open');

      closeModalByKey(userModal, bodyNoScroll);

      const url = this.firstElementChild.src;
      const likes = this.lastElementChild.children[1].textContent;
      const commentsCount = this.lastElementChild.children[0].textContent;
      const description = descriptionImg;
      renderedSocialComments(comments);

      popup(url, likes, description, commentsCount);
    });
  }

  return pictures[0].appendChild(fragment);
};

export {renderedPictures};
