const containerSvg = document.querySelectorAll('.container-svg');
const navHeartSvg = document.querySelector('.h');
const heart = document.querySelector('.heart');
const gridElements = document.querySelector('.add');
const gridElementImg = document.querySelectorAll('.grid-element__img');
const wishProduct = document.querySelector('.products');
const hoverShow = document.querySelector('.hover-show');
const ham = document.querySelector('.ham');
const services = document.querySelector('.services');
const arr = [];

let count = Number(heart.textContent) + 1;

if (count < containerSvg.length) {
  containerSvg.forEach((el) =>
    el.addEventListener('click', function () {
      navHeartSvg.style.fill = 'red';
      heart.textContent = count++;

      el.style.display = 'none';
      const obj = el.parentElement.parentElement.firstElementChild.attributes;
      const clone = obj[1].cloneNode(true);
      const html = ` <div class="product">
      <img src="./${clone.nodeValue}" alt="">
      <p>Lorem, ipsum esse nostrum quidem minima recusandae error.</p>
      <div class = product-svg>
      <svg>
        <use href="img/icons.svg#icon-heart"></use>
      </svg>
    </div>
      <button class="container-btn button product-button">BUY</button>
    </div>`;

      arr.push(html);

      localStorage.setItem('wish', arr);
    })
  );
}

window.addEventListener('load', function () {
  const getItem = localStorage.getItem('wish');
  if (getItem != null) {
    wishProduct.innerHTML = '';
    wishProduct.insertAdjacentHTML('beforeend', getItem);
    const favNum = wishProduct.children.length;
    heart.textContent = favNum;
  }

  localStorage.removeItem('wish');
});

const productsSvg = document.querySelectorAll('.product');
productsSvg.forEach((el) =>
  el.addEventListener('click', function () {
    const parent = el.parentElement;
    console.log(parent);
  })
);

const tog = function () {
  hoverShow.classList.toggle('hidden');
  ham.classList.toggle('open');
};
ham.addEventListener('click', tog);
services.addEventListener('click', tog);
