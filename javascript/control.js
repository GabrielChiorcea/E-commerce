"use strict";
import { importElement, add404, main } from "./index.js";
import { acceptKooky, user, closeSingIn } from "./modal.js";

acceptKooky;
closeSingIn;
user;

add404.addEventListener("click", function () {
  fetch("../html/404.html")
    .then((res) => res.text())
    .then((data) => {
      main.style.display = "block";

      main.innerHTML = "";
      main.insertAdjacentHTML("beforeend", data);
    });
});

importElement("../html/carrousel.html");
