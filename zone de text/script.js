const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

// add element
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    storage();
    item.value = "";
  });