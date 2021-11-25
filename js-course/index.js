import { Customer } from "./Customer.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingAccount } from "./SavingAccount.js";
import { Account } from './Account.js';

const client1 = new Customer("Artur Oscar", "111.222.333-44");

const checkingAccount = new CheckingAccount(client1, 1001);
checkingAccount.deposit(500);
checkingAccount.toWithdraw(100);

const savingAccount = new SavingAccount(100, client1, 1001);
const account = new Account(100, client1, 1001);
console.log(account); // fail

console.log(checkingAccount);
console.log(savingAccount);

// console.log((checkingAccount instanceof Account)); // true
// console.log((savingAccount instanceof Account));   // true

