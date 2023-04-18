function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('phone-number');
  phoneDiv.textContent = '📞 123 456 789';
  contact.appendChild(phoneDiv);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address');
  addressDiv.innerHTML = '📍 2834 N Ashland Ave, Chicago, United States';
  contact.appendChild(addressDiv);

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-img');
  const locationImg = document.createElement('img');
  locationImg.src = './images/location.png';
  locationDiv.appendChild(locationImg);
  contact.appendChild(locationDiv);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(createContact());
}

export default loadContact;
