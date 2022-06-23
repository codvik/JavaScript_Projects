export const createImg = (src, alt, plate) => {
  let img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  img.setAttribute('class', plate);

  return img;
};

export const createDiv = (cls) => {
  let divElement = document.createElement('div');
  divElement.setAttribute('class', cls);
  return divElement;
};

export const createPtag = (cls, txt) => {
  let name = document.createElement('p');
  name.setAttribute('class', cls);
  name.innerHTML = txt;
  return name;
};

export const createButtonTag = (cls) => {
  let increaseItem = document.createElement('button');
  increaseItem.setAttribute('class', cls);

  return increaseItem;
};

export const addItemToCart = (btn) => {
  btn.classList.remove('add');
  btn.classList.add('in-cart');
  btn.innerHTML = '';
  const img = document.createElement('img');
  img.setAttribute('src', 'images/check.svg');
  btn.append(img);
  btn.append('In Cart');
  btn.disabled = true;
};

export const removeFromCart = (cart, btn, li) => {
  cart.removeChild(li);
  btn.classList.remove('in-cart');
  btn.classList.add('add');
  btn.disabled = false;
  btn.innerText = 'Add to cart';
};
