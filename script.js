'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// this function add the class hidden to the modal and overlay (removing them)
const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// this function removes the class hidden to the modal and overlay making them visible
const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

// This Loop iterates through the buttons Show modal x
for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', openModal);
}

// This event makes the X button gets out of the modal window
btnCloseModal.addEventListener('click', closeModal);

// When pressing the overlay the modal window closes
overlay.addEventListener('click', closeModal);

// When we press the Escape key we close the modal window
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
