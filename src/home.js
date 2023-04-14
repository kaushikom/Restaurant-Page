function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  const textContent = document.createElement('div');
  textContent.classList.add('col');

  const heading = document.createElement('h1');
  heading.textContent = "Not McDonald's";

  const para = document.createElement('p');
  para.textContent = 'Food that makes you happy.';

  const orderBtn = document.createElement('button');
  orderBtn.textContent = 'Order Now!';

  textContent.appendChild(heading);
  textContent.appendChild(para);
  textContent.appendChild(orderBtn);

  home.appendChild(textContent);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('col');

  const burgerImg = document.createElement('img');
  burgerImg.src = './images/burger.svg';
  imageDiv.appendChild(burgerImg);

  home.appendChild(imageDiv);
  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.appendChild(createHome());
}

export default loadHome;
