function createMenuItem(name, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const itemImg = document.createElement('img');
  itemImg.src = `./images/${name}.png`;
  itemImg.alt = name;

  const itemName = document.createElement('h2');
  itemName.textContent = name;

  const itemPrice = document.createElement('p');
  itemPrice.innerHTML = `<span>&#8377;</span> ${price}`;

  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemPrice);

  return menuItem;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem('Veg Burger', 149));
  menu.appendChild(createMenuItem('French Fries', 99));
  menu.appendChild(createMenuItem('Coke', 59));
  menu.appendChild(createMenuItem('Coke Zero Can', 69));
  menu.appendChild(createMenuItem('Paneer Wrap', 199));
  menu.appendChild(createMenuItem('Veg Nuggets', 149));

  return menu;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(createMenu());
}

export default loadMenu;
