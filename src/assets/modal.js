const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');


const btn = document.getElementById('does-not-exist');

console.log(btn); // null

// ✅ Check if element exists before calling addEventListener()
if (openModal) {
  openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
}


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

//no le paremos vola a esto
const Modal = document.querySelector('.modal');
const showModalButton = document.querySelector('.show-modal-button');

showModalButton.addEventListener('click', function() {
  modal.classList.remove('modal--hidden');
});