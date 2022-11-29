export const modal = document.querySelector(".kooky");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".cooky-close");
const users = document.querySelector(".users");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

export const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const acceptKooky = btnCloseModal.addEventListener("click", closeModal);
export const user = users.addEventListener("click", function () {
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
export const closeSingIn = close.addEventListener("click", function () {
  form.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (esc) {
  if (esc.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
