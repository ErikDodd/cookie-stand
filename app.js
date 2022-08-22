'use strict';
// Global Variables
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// Store Location Objects
let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiePerHour: [],
    totalDailyCookies: 0,
    generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    // Total Cookie Function
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++) {
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
        }
    },
    display: function () {
        this.generateCookieTotals();
        let section = document.getElementById('Results')
        let title = document.createElement('h2')
        section.appendChild(title)
        title.textContent = this.name

        let list = document.createElement('ul')
        section.appendChild(list)

        for (let i = 0; i < this.cookiePerHour.length; i++) {
            let listItem = document.createElement('li')
            list.appendChild(listItem)
            listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`
        }

        let storeTotal = document.createElement('li')
        list.appendChild(storeTotal)
        storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`
    }

}

let Tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    cookiePerHour: [],
    totalDailyCookies: 0,
    generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    // Total Cookie Function
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++) {
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
        }
    },
    display: function () {
        this.generateCookieTotals();
        let section = document.getElementById('Results')
        let title = document.createElement('h2')
        section.appendChild(title)
        title.textContent = this.name

        let list = document.createElement('ul')
        section.appendChild(list)

        for (let i = 0; i < this.cookiePerHour.length; i++) {
            let listItem = document.createElement('li')
            list.appendChild(listItem)
            listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`
        }

        let storeTotal = document.createElement('li')
        list.appendChild(storeTotal)
        storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`
    }

}

let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    cookiePerHour: [],
    totalDailyCookies: 0,
    generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    // Total Cookie Function
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++) {
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
        }
    },
    display: function () {
        this.generateCookieTotals();
        let section = document.getElementById('Results')
        let title = document.createElement('h2')
        section.appendChild(title)
        title.textContent = this.name

        let list = document.createElement('ul')
        section.appendChild(list)

        for (let i = 0; i < this.cookiePerHour.length; i++) {
            let listItem = document.createElement('li')
            list.appendChild(listItem)
            listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`
        }

        let storeTotal = document.createElement('li')
        list.appendChild(storeTotal)
        storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`
    }

}

let Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 3.7,
    cookiePerHour: [],
    totalDailyCookies: 0,
    generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    // Total Cookie Function
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++) {
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
        }
    },
    display: function () {
        this.generateCookieTotals();
        let section = document.getElementById('Results')
        let title = document.createElement('h2')
        section.appendChild(title)
        title.textContent = this.name

        let list = document.createElement('ul')
        section.appendChild(list)

        for (let i = 0; i < this.cookiePerHour.length; i++) {
            let listItem = document.createElement('li')
            list.appendChild(listItem)
            listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`
        }
    
            let storeTotal = document.createElement('li')
            list.appendChild(storeTotal)
            storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`
    }

}
let Lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    cookiePerHour: [],
    totalDailyCookies: 0,
    generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    // Total Cookie Function
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++) {
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
        }
    },
    display: function () {
        this.generateCookieTotals();
        let section = document.getElementById('Results')
        let title = document.createElement('h2')
        section.appendChild(title)
        title.textContent = this.name

        let list = document.createElement('ul')
        section.appendChild(list)

        for (let i = 0; i < this.cookiePerHour.length; i++) {
            let listItem = document.createElement('li')
            list.appendChild(listItem)
            listItem.textContent = `${storeHours[i]}: ${this.cookiePerHour[i]} cookies`
        }

        let storeTotal = document.createElement('li')
        list.appendChild(storeTotal)
        storeTotal.textContent = `Total: ${this.totalDailyCookies} Cookies`
    }

}

// Invoking the Functions for each Store
Seattle.display();
Tokyo.display();
Dubai.display();
Paris.display();
Lima.display();
