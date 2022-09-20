const hamburgerMenu = document.querySelector('.menu-icon');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const mobileClose = document.querySelector('.mobile-menu-close');

hamburgerMenu.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'flex';
});

mobileClose.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'none';
});

// close menu on click mobile-nav-item
mobileNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});
