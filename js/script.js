/* Меню на мобильных устройствах */
const sidebarToggleBtn = document.querySelector(".menu");
const menuTop = document.querySelector(".menu-top");
const menuMiddle = document.querySelector(".menu-middle");
const menuBottom = document.querySelector(".menu-bottom");
const mobileMenu = document.querySelector(".modal-mobile-menu");
const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
const logoLink = document.querySelector(".logo-link");
const hireMe = document.querySelector(".hire-me-btn");

/* Модальное окно для видео */
const modalVideo = document.querySelector(".modal-my-video");
const videoBtn = document.querySelector(".about-me-btn");
const closeVideoBtn = document.querySelector(".icon-cross");

// Клик по кнопке для скрытия показа меню и изменения иконки
sidebarToggleBtn.onclick = function (event) {
  menuTop.classList.toggle("menu-top-click");
  menuMiddle.classList.toggle("menu-middle-click");
  menuBottom.classList.toggle("menu-bottom-click");
  mobileMenu.classList.toggle("modal-mobile-menu--active");
};

let menuItems = Array.from(mobileMenuItems);
menuItems.push(logoLink, hireMe);

// Клик по пунктам меню и скрытие самого меню
menuItems.forEach((item) => {
  item.onclick = function (event) {
    menuTop.classList.remove("menu-top-click");
    menuMiddle.classList.remove("menu-middle-click");
    menuBottom.classList.remove("menu-bottom-click");
    mobileMenu.classList.remove("modal-mobile-menu--active");
  };
});

// Клик по кнопке PLAY для отображение модального окна видео
videoBtn.onclick = function (event) {
  event.preventDefault();
  modalVideo.classList.toggle("modal-my-video--active");
};

// Клик по крестику в модальном окне для видео, чтобы его закрыть
closeVideoBtn.onclick = function () {
  const video = document.querySelector("video");

  if (video) {
    video.pause();
  }
  modalVideo.classList.remove("modal-my-video--active");
};
