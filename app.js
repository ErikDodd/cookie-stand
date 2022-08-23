'use strict';

// Global Variables
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStores = [];

// Store Constructor Function
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name,
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiePerHour = [];
  this.totalDailyCookies = 0;
  this.generateCookieTotals();
  this.generateAndRender();
  // allStores.push(this);
}

// Prototypes for Random Number
Store.prototype.generateRandomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
};

// Prototype for Cookie Totals
Store.prototype.generateCookieTotals = function () {
  for (let i = 0; i < storeHours.length; i++) {
    // Steps that are happening for each hour
    let custNumber = this.generateRandomNumber();
    let cookieNumber = custNumber * this.avgCookieSale;
    let roundedCookieNumber = Math.round(cookieNumber);
    this.cookiePerHour.push(roundedCookieNumber);
    this.totalDailyCookies += roundedCookieNumber;
  }
};

// Prototype for Rendering
Store.prototype.generateAndRender = function () {
  let section = document.getElementById('Results');
  let title = document.createElement('h2');
  section.appendChild(title);
  title.textContent = this.name;

  let list = document.createElement('ul');
  section.appendChild(list);

  for (let i = 0; i < this.cookiePerHour.length; i++) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`;
  }

  let storeTotal = document.createElement('li');
  list.appendChild(storeTotal);
  storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`;
};

// Function for Adding Stores
function addStore (data) {
  allStores.push(new Store(data.name, data.minCust, data.maxCust, data.avgCookieSale));
}
// let seattle = new Store('Seattle', 23, 65, 6.3);

// Adding Each Store 
addStore({
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
});

addStore({
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
});

addStore({
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
});

addStore({
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 3.7,
});

addStore({
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
});

console.log(allStores);

// Invoking the Functions for each Store
// Seattle.display();
// Tokyo.display();
// Dubai.display();
// Paris.display();
// Lima.display();
