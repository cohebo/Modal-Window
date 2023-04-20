'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  console.log('Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', OpenModal);
}

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

// Close modal window with 'Esc' key
document.addEventListener('keydown', function (e) {
  // If pressed key is equal to 'Esc' key AND if modal does NOT contain class 'hidden' then close modal window
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }
});
