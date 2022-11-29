export const add404 = document.querySelector(".list");
export const main = document.querySelector(".main");
const errMain = document.querySelector(".err-main");
export const link = document.querySelector(".fetc");
export const navLogo = document.querySelector(".nav__logo");

export const importElement = function (root) {
  fetch(root)
    .then((res) => res.text())
    .then((data) => {
      link.innerHTML = "";
      link.insertAdjacentHTML("afterbegin", data);
    });
};
