(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-mob-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-close-mob-menu]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
