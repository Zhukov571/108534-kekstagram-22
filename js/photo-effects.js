// Фотоэффекты
const photoEffect = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectInput = document.querySelector('#effect');
const noUiSlider = window.noUiSlider;

for (let i = 0; i < photoEffect.length; i++) {
  photoEffect[i].addEventListener('change', function (evt) {
    evt.preventDefault();
    let className = 'effects__preview--';

    switch (evt.target.value) {
      case 'none':
        className += this.value;
        imgPreview.querySelector('img').style.filter = 'none';
        effectLevel.classList.add('hidden');
        effectInput.value = '';
        break;

      case 'chrome':
        className += this.value;
        removeClassHidden();
        sliderEffects(0, 1, 0.1, 0, 'grayscale', '');
        break;

      case 'sepia':
        className += this.value;
        removeClassHidden();
        sliderEffects(0, 1, 0.1, 0, 'sepia', '');
        break;

      case 'marvin':
        className += this.value;
        removeClassHidden();
        sliderEffects(0, 100, 1, 0,  'invert', '%');
        break;

      case 'phobos':
        className += this.value;
        removeClassHidden();
        sliderEffects(0, 3, 0.1, 0, 'blur', 'px');
        break;

      case 'heat':
        className += this.value;
        removeClassHidden();
        sliderEffects(1, 3, 0.1, 0, 'brightness', '');
        break;
    }
    imgPreview.querySelector('img').className = '';
    imgPreview.querySelector('img').classList.add(className);
  });
}

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});


const sliderEffects = function (minVal, maxVal, stepVal, start, filter, unit) {
  // Cлайдер
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minVal,
      max: maxVal,
    },
    start: start,
    step: stepVal,
  });

  effectLevelSlider.noUiSlider.set(start);

  effectLevelSlider.noUiSlider.on('update', (values) => {
    imgPreview.querySelector('img').style.filter = filter + '(' + values + unit + ')';
    effectInput.value = values;
  });
};

const removeClassHidden = () => {
  effectLevel.classList.remove('hidden');
}

