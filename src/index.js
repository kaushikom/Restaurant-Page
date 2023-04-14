import loadHome from './home';
function loadSite() {
  const content = document.getElementById('content');

  content.appendChild(createNav());
  content.appendChild(createMain());

  loadHome();
}

function createNav() {
  const navbar = document.createElement('nav');

  const title = document.createElement('span');
  title.textContent = "Not McDonald's";
  navbar.appendChild(title);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  // create a function 'loadHome' which sets the main page's content to home.
  // homeBtn.addEventListener('click', loadHome);
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  // create a function 'loadMenu' which loads menu to the main page.
  // menuBtn.addEventListener('click', loadMenu);
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact Us';
  //create a function 'loadContact' which loads menu to the main page.
  // contactBtn.addEventListener('click', loadContact);
  navbar.appendChild(contactBtn);

  return navbar;
}
function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
}
loadSite();
