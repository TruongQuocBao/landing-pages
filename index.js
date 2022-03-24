(() => {
  const menu = document.querySelector('.menu');
  const menuBg = document.querySelector('.menu__bg');
  const menuToggle = document.querySelector('.menu__toggle');
  const menuClose = document.querySelector('.menu__close');
  menuToggle.addEventListener('click', (e) => {
    menuBg.classList.add('is-active');
    menu.classList.add('is-active');
    menuClose.classList.add('is-active');
  });

  menuClose.addEventListener('click', (e) => {
    menuBg.classList.remove('is-active');
    menu.classList.remove('is-active');
    menuClose.classList.remove('is-active');
  });
})();

// window.addEventListener('load', function () {
//   const menu = document.querySelector('.menu');
//   const menuBg = document.querySelector('.menu__bg');
//   const menuToggle = document.querySelector('.menu__toggle');
//   // const menuClose = document.querySelector(".menu-close");
//   menuToggle.addEventListener('click', handleToggleMenu);
//   function handleToggleMenu(e) {
//     menuBg.classList.add('is-active');
//     menu.classList.add('is-active');
//     // menuClose.classList.add('is-active');
//   }
//   // menuClose.addEventListener("click", function () {
//   //   menuBg.classList.remove("is-active");
//   //   menu.classList.remove("is-active");
//   //   this.classList.remove("is-active");
//   //   // change
//   // });
// });
