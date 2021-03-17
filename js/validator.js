const hashtagInput = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const isValidComments = function() {
  if (description.value.length > 140) {
    description.setCustomValidity('Максимальная длина текста не должна превышать 140 символов!');
  }
}

const isValidHashtags = function () {
  const hashtagsVal = hashtagInput.value;
  const regex = /^#[a-zA-Zа-яА-Я0-9]*$/;
  const hashtags = hashtagsVal.toLowerCase().split(' ');

  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i][0] !== '#' && hashtagsVal.length !== 0) {
      hashtagInput.setCustomValidity('Первый символ должен быть "#"!');
    } else if (!regex.test(hashtags[i]) && hashtagsVal.length !== 0) {
      hashtagInput.setCustomValidity('Текст после решетки(#) может состоять только из букв и чисел!');
    } else if (hashtags[i] === '#') {
      hashtagInput.setCustomValidity('Хештег не может состоять из одной решетки(#)');
    } else if (hashtags[i].length > 20) {
      hashtagInput.setCustomValidity('Длина Хештега не может превышать 20 символов!');
    } else if (i !== hashtags.indexOf(hashtags[i]) || i !== hashtags.lastIndexOf(hashtags[i])) {
      hashtagInput.setCustomValidity('Хештеги не могут повторяться!');
    } else if (hashtags.length > 5) {
      hashtagInput.setCustomValidity('Максимальное количество Хештегов не должно превышать 5!');
    } else {
      hashtagInput.setCustomValidity('');
    }
  }
}

description.addEventListener('input', function () {
  isValidComments();
});

hashtagInput.addEventListener('input', function () {
  isValidHashtags();
});
