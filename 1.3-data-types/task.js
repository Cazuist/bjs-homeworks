'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  let creditBody = amount - contribution;
  let today = new Date();
  let creditTerm = ( (date.getFullYear() - today.getFullYear() ) * 12) + date.getMonth() - today.getMonth();
  let monthPercent = percent / 100 / 12;
  let monthPayment = creditBody * (monthPercent + monthPercent/(((1+monthPercent) ** creditTerm) -1 ));
  let totalAmount = +(monthPayment * creditTerm).toFixed(2);
  
  return totalAmount;
}

function getGreeting(name) {  
  return `Привет, мир! Меня зовут ${name === '' || name === null || name === undefined ? 'Аноним' : name}`;
}

