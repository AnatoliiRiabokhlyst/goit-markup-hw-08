(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mob-menu-open]'),
    closeModalBtn: document.querySelector('[data-mob-menu-close]'),
    modal: document.querySelector('[data-mob-menu]'),
    body: document.querySelector('[body]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();