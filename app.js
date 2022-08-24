'use strict';

// Global Variables
let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let table = document.getElementById('SalesData');
let tableBody = document.getElementById('tbody');

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
  allStores.push(this);
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

Store.prototype.generateAndRender = function () {
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  
  for (let i = 0; i < storeHours.length; i++) {
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = `${this.cookiePerHour[i]}`;
    tableRow.appendChild(tableDataElement);
  }
  tableBody.appendChild(tableRow);
  // let tableFooter = document.createElement('th');
  // tableHead.textContent = this.totalDailyCookies;
  // tableHead.appendChild(tableFooter);
};


// Prototype for Rendering
// Store.prototype.generateAndRender = function () {
//   let section = document.getElementById('Results');
//   let title = document.createElement('h2');
//   section.appendChild(title);
//   title.textContent = this.name;

//   let list = document.createElement('ul');
//   section.appendChild(list);

//   for (let i = 0; i < this.cookiePerHour.length; i++) {
//     let listItem = document.createElement('li');
//     list.appendChild(listItem);
//     listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`;
//   }

//   let storeTotal = document.createElement('li');
//   list.appendChild(storeTotal);
//   storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`;
// };

// Function for Adding Stores
function addStore (data) {
 new Store(data.name, data.minCust, data.maxCust, data.avgCookieSale);
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

// for (let i = 0; i < allStores.length; i++) {
  // allStores[i].generateAndRender();
// }

// Invoking the Functions for each Store
// Seattle.display();
// Tokyo.display();
// Dubai.display();
// Paris.display();
// Lima.display();
