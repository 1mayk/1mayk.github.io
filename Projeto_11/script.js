// Para o requisito 4, consultei o PR do Yuri para implementar a lógica
const cartElement = document.querySelector('.cart__items');
const itemsElement = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

async function waiting(id) {
  const item = await fetchItem(id);
  return item;
}

async function totalItems(arr) {
  const somatorio = async (total, item) => {
    const { price } = await waiting(item);
    return await total + price;
  };

  const total = await arr.reduce(somatorio, 0);
  const aux = document.querySelector('.total-price');
  aux.innerText = total;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // Requisito 3
  event.target.remove();

  // Requisito 4
  saveCartItems(cartElement.innerHTML);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function itemsCart(id) {
  const cart = cartElement;
  const item = await waiting(id);
  cart.appendChild(createCartItemElement(item));
  saveCartItems(cart.innerHTML);
}

function loadLocalStorage() { 
  cartElement.innerHTML = getSavedCartItems();
  cartElement.childNodes.forEach((item) => item.addEventListener('click', cartItemClickListener));
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => { itemsCart(sku); });
  section.appendChild(button);

  return section;
}

// Função que faz a listagem de produtos
async function addItemsList() {
  itemsElement.appendChild(createCustomElement('h3', 'loading', 'carregando...'));
  const products = await fetchProducts('computador');
  const items = document.getElementsByClassName('items');
  const loadingE = document.querySelector('.loading'); 
  loadingE.remove(); 
  products.results.forEach(({ id, title, thumbnail }) => {
    items[0].appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
}

// Limpar o carrinho
const cleaner = () => {
  cartElement.innerHTML = '';
  saveCartItems(cartElement.innerHTML);
};

document.querySelector('.empty-cart').addEventListener('click', cleaner);

window.onload = () => {
  addItemsList();

  // Requisito 4 e 5
  if (localStorage.length) {
    getSavedCartItems().forEach((id) => itemsCart(id));
    totalItems(getSavedCartItems());
  }
  loadLocalStorage();
};