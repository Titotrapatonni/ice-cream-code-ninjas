(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-video-open]'),
    closeModalBtn: document.querySelector('[data-modal-video-close]'),
    modal: document.querySelector('[data-modal-video]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
