import { Customer } from "./Customer.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingAccount } from "./SavingAccount.js";

const client1 = new Customer("Artur Oscar", "111.222.333-44");

const checkingAccount = new CheckingAccount(1000, 10, client1);
checkingAccount.deposit(500);
checkingAccount.toWithdraw(100);

const savingAccount = new SavingAccount(100, client1, 1000);

console.log(checkingAccount);
console.log(savingAccount);

