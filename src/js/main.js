// Navigation mobile version toggle
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Show modal form window
var btnLogin = document.querySelector('.main-nav__user-login');
var modalForm = document.querySelector('.modal-personal');

btnLogin.addEventListener('click', function showModalForm(a) {
  a.preventDefault();
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');

  modalForm.classList.add('modal-personal--show');
});

// Close modal form window
var btnClose = document.querySelector('.btn--close');

btnClose.addEventListener('click', function closeModalForm(a) {
  a.preventDefault();
  modalForm.classList.remove('modal-personal--show');
});

// Button show news
var btnShowAll = document.querySelector(".news__to-all");
var news = document.querySelectorAll(".news__item");

btnShowAll.addEventListener('click', function(a) {
  a.preventDefault();
  [].forEach.call(news, function(elem) {
    if (elem.classList.contains('news__item--closed')) {
      btnShowAll.innerHTML = 'Скрыть все';
      elem.classList.remove('news__item--closed');
      elem.classList.add('news__item--opened');
    } else {
      btnShowAll.innerHTML = 'Показать все';
      elem.classList.add('news__item--closed');
      elem.classList.remove('news__item--opened');
    }
  });
});
