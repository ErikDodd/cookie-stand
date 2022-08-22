'use strict';
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiePerHour:[],
    totalDailyCookies: 0,

     generateRandomNumber: function () {
        return Math.floor(Math.random() * (this.maxCust + 1)) + this.minCust;
    },
    generateCookieTotals: function () {
        for (let i = 0; i < storeHours.length; i++){
            // Steps that are happening for each hour
            let custNumber = this.generateRandomNumber()
            let cookieNumber = custNumber * this.avgCookieSale
            let roundedCookieNumber = Math.round(cookieNumber)
            this.cookiePerHour.push(roundedCookieNumber)
            this.totalDailyCookies += roundedCookieNumber
            console.log(this.cookiePerHour, this.totalDailyCookies)

        }
        // for(let hour of storeHours)
    }
}

Seattle.generateCookieTotals();
   

    // generateRandomNumber(65,23);