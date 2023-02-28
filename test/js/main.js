'use strict';

// The purpose of the loop is to generate the HTML code required to make the shopping list visible for the user
const container = document.querySelector('.container');
const list = document.createElement('ul');

container.append(list);

// The user can fill the shopping list thanks to an input type text
const add = document.getElementById('add');
const end = document.getElementById('end');

// Creation of an array containing all the items the user needs to buy
const shoppingList = [];

add.addEventListener('click',
function() {
  const toBuy = document.getElementById('item').value;
  shoppingList.push(toBuy);
})

end.addEventListener('click',
function() {
  // Creation of an index variable to use as a condition for our loop
  let i = 0;

  // IF the condition is true, the loop can go on
  while (i < shoppingList.length) {
    const item = `<li>${shoppingList[i]}</li>`;
    list.innerHTML += item;
    i++;
}
})