import { Customer } from "./Customer.js"
import { Account } from "./Account.js"

const arturAccount = new Account(1000, 10)
const oscarAccount = new Account(1001, 11)

const arturCustomer = new Customer();
arturCustomer.name = "Artur Oscar"
arturCustomer.cpf = "111.222.333-44"
arturCustomer.account = arturAccount;

const oscarCustomer = new Customer();
oscarCustomer.name = "Oscar Jr"
oscarCustomer.cpf = "555.222.333-44"
oscarCustomer.account = oscarAccount;

console.log(arturCustomer);
console.log(oscarCustomer);

console.log(arturCustomer.account.deposit(500));
console.log(oscarCustomer.account.toWithdraw(200));

console.log(arturCustomer.account.toWithdraw(100));

console.log(arturCustomer.account.transfer(150, oscarCustomer.account))

console.log(arturCustomer);
console.log(oscarCustomer);

