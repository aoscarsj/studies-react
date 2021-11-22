import { Customer } from "./Customer.js";
import { Account } from "./Account.js";

const arturCustomer = new Customer("Artur Oscar", "111.222.333-44");
const oscarCustomer = new Customer("Oscar Jr", "555.222.333-44");

const arturAccount = new Account(1000, 10, arturCustomer);
const oscarAccount = new Account(1001, 11, oscarCustomer);

console.log(arturAccount.deposit(500));
console.log(oscarAccount.toWithdraw(200));

console.log(arturAccount.toWithdraw(100));
console.log(arturAccount.transfer(150, oscarAccount));

console.log(arturCustomer);
console.log(oscarCustomer);

console.log(arturAccount);
console.log(oscarAccount);

console.log(Account._totalAccounts)