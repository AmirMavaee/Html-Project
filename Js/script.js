const hamnurgerMenu = document.querySelector('.hamnurger-menu');
const zarinMenu = document.querySelector('.zarin-menu');
const zarinMenuImage = document.querySelector('.zarin-menu-img');
const showMoreMenu = document.querySelector('#show-more-menu');
const showProductMenu = document.querySelector('#show-product-menu');
const productItem = document.querySelector('.product-item');
const moreItem = document.querySelector('.more-item');

hamnurgerMenu.addEventListener('click', function () {
  zarinMenu.classList.add('show-zarin-menu');
});

zarinMenuImage.addEventListener('click', function () {
  zarinMenu.classList.remove('show-zarin-menu');
});

showMoreMenu.addEventListener('mouseenter', function () {
  moreItem.style.animation = 'showUp 0.45s 1';
  moreItem.style.display = 'block';
});

showMoreMenu.addEventListener('mouseleave', function () {
  moreItem.style.display = 'none';
});

showProductMenu.addEventListener('mouseenter', function () {
  productItem.style.animation = "showUp 0.45s 1";
  productItem.style.display = "flex"
});

showProductMenu.addEventListener('mouseleave', function () {
  productItem.style.display = "none";
});
