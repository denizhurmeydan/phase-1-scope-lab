// Write your solution in this file!
let customerName = "bob";

function upperCaseCustomerName() {
  let customerName = "bob";
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

let leastFavoriteCustomer = "John Doe";

function changeLeastFavoriteCustomer() {
  let leastFavoriteCustomer = "Jane Smith";
  return leastFavoriteCustomer;
}

console.log(upperCaseCustomerName());
setBestCustomer();
console.log(bestCustomer);
overwriteBestCustomer();
console.log(bestCustomer);
console.log(changeLeastFavoriteCustomer());



