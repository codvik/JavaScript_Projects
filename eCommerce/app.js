import {
  createImg,
  createDiv,
  createPtag,
  createButtonTag,
  addItemToCart,
  removeFromCart
} from './utility.js';
import { menuItems } from './data.js';

const cart = document.querySelector('.cart-summary');
const empty = document.querySelector('.empty');
const taxDiv = document.querySelector('.amount.price.tax');
const totalDiv = document.querySelector('.amount.price.total');
const add = document.querySelectorAll('.add');
const subtotalTag = document.querySelector('.amount.price.subtotal');

const newPrice = () => {
  let subPrice = 0;
  let size = menuItems.length;
  for (let i = 0; i < size; i++) {
    let price = menuItems[i].price;
    let count = menuItems[i].count;
    subPrice += price * count;
  }

  let tax = 0;
  tax = subPrice * 0.0975;
  tax = Math.round(tax) / 100;
  subPrice = subPrice / 100;
  taxDiv.innerText = '$' + tax;
  let totalValue = 0;
  totalValue = subPrice + tax;
  totalValue = Math.round(totalValue * 100) / 100;
  subtotalTag.innerText = '$' + subPrice;
  totalDiv.innerText = '$' + totalValue;

  if (subPrice == 0) empty.style.display = 'block';
  else empty.style.display = 'none';
};

const newItem = (item, quantity, subtotal) => {
  let tmpValue = (item.count * item.price) / 100;
  subtotal.innerHTML = '$' + tmpValue;
  quantity.innerHTML = item.count;
  newPrice(menuItems);
};

const appendItem = (btn, id) => {
  let li = document.createElement('li');
  li.setAttribute('id', id);
  let img = createImg(
    `images/${menuItems[id].image}`,
    menuItems[id].alt,
    'plate'
  );
  let divTagPlate = createDiv('plate');
  divTagPlate.append(img);
  let quantity = createDiv('quantity');
  menuItems[id].count += 1;
  quantity.innerHTML = menuItems[id].count;
  divTagPlate.append(quantity);
  li.append(divTagPlate);
  let divContent = createDiv('content');
  let name = createPtag('menu-itme', menuItems[id].name);
  divContent.append(name);
  let price = createPtag('price', '$' + menuItems[id].price / 100);
  divContent.append(price);
  li.append(divContent);
  let divBtn = createDiv('quantity__wrapper');
  let decreaseValue = document.createElement('button');
  decreaseValue.setAttribute('class', 'decrease');

  img = createImg('images/chevron.svg');
  decreaseValue.append(img);
  divBtn.append(decreaseValue);
  divBtn.append(quantity);
  let increaseItem = createButtonTag('increase');

  img = createImg('images/chevron.svg');
  increaseItem.append(img);

  divBtn.append(increaseItem);
  li.append(divBtn);

  let divSubtotal = createDiv('subtotal');
  divSubtotal.innerHTML =
    '$' + (menuItems[id].price * quantity.innerHTML) / 100;
  li.append(divSubtotal);

  decreaseValue.addEventListener('click', () => {
    if (menuItems[id].count == 1) removeFromCart(cart, btn, li);
    menuItems[id].count--;
    newItem(menuItems[id], quantity, divSubtotal);
  });

  increaseItem.addEventListener('click', () => {
    menuItems[id].count++;
    newItem(menuItems[id], quantity, divSubtotal);
  });

  cart.append(li);
  newPrice();
};

add.forEach((elem, id) => {
  elem.addEventListener('click', () => {
    appendItem(elem, id);
    addItemToCart(elem, id);
  });
});
