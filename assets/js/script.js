'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav link
navigationLinks.forEach((link, index) => {
  link.addEventListener('click', function () {
    const targetPage = this.innerText.toLowerCase().trim();
    console.log('Clicked:', targetPage);

    pages.forEach((page, idx) => {
      console.log('Checking page:', page.dataset.page);

      if (page.dataset.page === targetPage) {
        page.classList.add('active');
        navigationLinks[idx].classList.add('active');
      } else {
        page.classList.remove('active');
        navigationLinks[idx].classList.remove('active');
      }
    });

    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }

    window.scrollTo(0, 0);
  });
});
