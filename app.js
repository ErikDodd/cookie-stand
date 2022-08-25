'use strict';

// Global Variables
let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// let table = document.getElementById('SalesData');
let tableBody = document.getElementById('tbody');


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

// Prototype Function for Random Number
Store.prototype.generateRandomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
};

// Prototype Function for Cookie Totals
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
// Function for Generate And Render
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
  tableData = document.createElement('td');
  tableData.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableData);
};

function generateHeader() {
  let tableHeader = document.getElementById('thead');
  let newHead = document.createElement('th');
  tableHeader.appendChild(newHead);

  for (let i = 0; i < storeHours.length; i++) {
    let newHead = document.createElement('th');
    tableHeader.appendChild(newHead);
    newHead.textContent = storeHours[i];
    // tableHeader.appendChild(tableHeader);
  }
}

function generateFooter () {
  let table = document.getElementById('SalesData');

  // define row element
  let row = document.createElement('tr');
  let head = document.createElement('th');
  head.textContent = 'Total Sales';
  row.appendChild(head);
  table.appendChild(row);

  // outer loop through hours
  for (let hour in storeHours) {
    let cookiePerHour = 0;
    let cell = document.createElement('td');

    // inner loop through stores
    for (let store in allStores) {
      let currentStore = allStores[store];
      console.log(currentStore);
      let currentSales = currentStore.cookiePerHour[hour];
      cookiePerHour += currentSales;
    }
    cell.textContent = cookiePerHour;
    row.appendChild(cell);
    console.log(`Sales at ${hour[storeHours]} : ${cookiePerHour}`);
  }

  // now add the grandTotals
  let cell = document.createElement('td');
  let totals = 0;
  for (let store of allStores) {
    totals += store.totalDailyCookies;
  }
  cell.textContent = totals;
  row.appendChild(cell);
}

// Store Variable and Adding All Store Locations
let allStores = [];

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);

//Form for New Store

let formElement = document.getElementById('New_Store_Form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target.New_location);
  console.log(event.target.New_MinCust);
  console.log(event.target.New_MaxCust);
  console.log(event.target.New_CookiesPerHour);

  let { New_location, New_MinCust, New_MaxCust } = event.target;


  // generateFooter();
});

console.log(allStores);
generateHeader();
generateFooter();

// for (let i = 0; i < allStores.length; i++) {
// allStores[i].generateAndRender();
// }

// Invoking the Functions for each Store
// Seattle.display();
// Tokyo.display();
// Dubai.display();
// Paris.display();
// Lima.display();
