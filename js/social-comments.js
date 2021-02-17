// Функция создания песевдомасива коментариев пользователей
const  renderedSocialComments = (arr) => {
  const socialComments = document.querySelectorAll('.social__comments');
  const templateFragment = document.querySelector('#social-comment').content;
  const template = templateFragment.querySelector('li');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < arr.length; i++) {
    const element = template.cloneNode(true);
    element.firstElementChild.src = arr[i].avatar;
    element.firstElementChild.alt = arr[i].name;
    element.lastElementChild.textContent = arr[i].message;
    fragment.appendChild(element);
  }

  return socialComments[0].append(fragment);
};

export {renderedSocialComments};
