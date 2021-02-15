//DOM елемент #picture
const renderedPictures = function (arr) {
  const pictures = document.querySelectorAll('.pictures');

  const templateFragment = document.querySelector('#picture').content;

  const template = templateFragment.querySelector('a');

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < arr.length; i++) {
    const element = template.cloneNode(true);
    element.firstElementChild.src = arr[i].url;
    element.lastElementChild.children[1].textContent = arr[i].likes;
    element.lastElementChild.children[0].textContent = arr[i].comments.length;
    fragment.appendChild(element);
  }

  return pictures[0].appendChild(fragment);
};

export {renderedPictures};
