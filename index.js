import './modules/date.js';
import SwitchPage from './modules/switch.js';
import allLibrary from './modules/class.js';

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookAdd = document.getElementById('book-add');


//   constructor() {
//     this.books = [
//       {
//         title: 'Ghost',
//         author: 'Sidney Sheldon',
//       },
//       {
//         title: 'The Naked Face',
//         author: 'Sidney Sheldon',
//       },
//     ];
//   }
//   // add books

//   addBook(title, author) {
//     this.books.push({
//       title,
//       author,
//     });

//     bookAuthor.value = '';
//     bookTitle.value = '';
//     this.setLocalStorage();
//     this.displayBooks();
//   }

//   removeBook(index) {
//     this.books.splice(index, 1);
//     this.setLocalStorage();
//     this.displayBooks();
//   }

//   setLocalStorage() {
//     localStorage.setItem('localLibraries', JSON.stringify(this.books));
//   }

//   getLocalStorage() {
//     if (localStorage.getItem('localLibraries')) {
//       this.books = JSON.parse(localStorage.getItem('localLibraries'));
//     }
//     this.displayBooks();
//   }

//   displayBooks() {
//     bookList.innerHTML = '';
//     this.books.forEach((book, index) => {
//       const h3 = document.createElement('div');
//       h3.classList.add('book-div');
//       const bookNames = document.createElement('p');
//       const removeBtn = document.createElement('button');
//       bookNames.textContent = ` "${book.title}" by ${book.author}`;

//       removeBtn.textContent = 'Remove';
//       removeBtn.classList.add('remove');
//       h3.append(bookNames, removeBtn);
//       removeBtn.addEventListener('click', () => {
//         this.removeBook(index);
//       });
//       bookList.appendChild(h3);
//     });
//   }
// }

// const allLibrary = new Booklibrary();
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