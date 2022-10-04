const SwitchPage = (pageId) => {
  const currentPage = document.querySelector('.pages .page.is-active');
  currentPage.classList.remove('is-active');

  const nextPage = document.querySelector(`.pages .page[data-page="${pageId}"]`);
  nextPage.classList.add('is-active');
};

export default SwitchPage;