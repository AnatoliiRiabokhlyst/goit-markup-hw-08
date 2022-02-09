(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mob-menu-open]'),
    closeModalBtn: document.querySelector('[data-mob-menu-close]'),
    modal: document.querySelector('[data-mob-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();