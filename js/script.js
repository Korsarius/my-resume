/* Фильтер на мобильных устройствах */
const sidebarToggleBtn = document.querySelector(".menu");
const menuTop = document.querySelector(".menu-top");
const menuMiddle = document.querySelector(".menu-middle");
const menuBottom = document.querySelector(".menu-bottom");
// const sidebar = document.querySelector(".sidebar");

// Клик по кнопке для скрытия показа фильтра и изменения иконки
sidebarToggleBtn.onclick = function (event) {
  menuTop.classList.toggle("menu-top-click");
  menuMiddle.classList.toggle("menu-middle-click");
  menuBottom.classList.toggle("menu-bottom-click");
//   sidebar.classList.toggle("sidebar--mobile-active");
};