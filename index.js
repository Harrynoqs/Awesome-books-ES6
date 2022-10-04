import './modules/date.js';
import SwitchPage from './modules/switch.js';
import allLibrary from './modules/class.js';

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookAdd = document.getElementById('book-add');

bookAdd.addEventListener('click', (e) => {
  e.preventDefault();
  allLibrary.addBook(bookTitle.value, bookAuthor.value);
  allLibrary.displayBooks();
  bookAuthor.value = '';
  bookTitle.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  allLibrary.getLocalStorage();
});

window.onload = () => {
  const tabSwitchers = document.querySelectorAll('[data-switcher]');

  for (let i = 0; i < tabSwitchers.length; i += 1) {
    const tabSwitcher = tabSwitchers[i];
    const pageId = tabSwitcher.dataset.tab;

    tabSwitcher.addEventListener('click', () => {
      document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
      tabSwitcher.parentNode.classList.add('is-active');

      SwitchPage(pageId);
    });
  }
};