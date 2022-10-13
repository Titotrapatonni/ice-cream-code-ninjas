(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product1-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-close]'),
    modal: document.querySelector('[data-modal-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
