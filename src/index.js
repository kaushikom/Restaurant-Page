import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';
let activeState = 'home';
function loadSite() {
  const content = document.getElementById('content');
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
}

function createNav() {
  const navbar = document.createElement('nav');

  const title = document.createElement('span');
  title.textContent = "Not McDonald's";
  navbar.appendChild(title);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', () => {
    if (activeState == 'home') return;
    else {
      loadHome();
      activeState = 'home';
    }
  });
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';

  menuBtn.addEventListener('click', () => {
    if (activeState == 'menu') return;
    else {
      loadMenu();
      activeState = 'menu';
    }
  });
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact Us';

  contactBtn.addEventListener('click', () => {
    if (activeState == 'contact') return;
    else {
      loadContact();
      activeState = 'contact';
    }
  });
  navbar.appendChild(contactBtn);

  return navbar;
}
function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = 'Made By: <img src ="./images/github.png"> Om Kaushik ';
  return footer;
}

loadSite();
