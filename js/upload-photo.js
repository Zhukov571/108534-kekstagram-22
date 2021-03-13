import {closePopup} from './close-popup.js';

const uploadPhoto = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const bodyNoScroll = document.querySelector('body');
const closeModal = document.querySelector('#upload-cancel');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

uploadPhoto.addEventListener('change', function (evt) {
  evt.preventDefault();
  if (this.value) {
    imgUpload.classList.remove('hidden');
    bodyNoScroll.classList.add('modal-open');
  }
});

closeModal.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup(imgUpload, bodyNoScroll, false);
  uploadPhoto.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    closePopup(imgUpload, bodyNoScroll, false);
    uploadPhoto.value = '';
  }
});

controlSmaller.addEventListener('click', (evt) => {
  evt.preventDefault();
  let val = controlValue.value;
  if (val > 25) {
    controlValue.value = val - 25;
    val = controlValue.value / 100;
    imgPreview.querySelector('img').style.transform = 'scale(' + val + ')';
  }
});

controlBigger.addEventListener('click', (evt) => {
  evt.preventDefault();
  let val = controlValue.value;
  if (val < 100) {
    controlValue.value = + val + 25;
    val = controlValue.value / 100;
    imgPreview.querySelector('img').style.transform = 'scale(' + val + ')';
  }
});
