import { Account } from './Account.js'

export class CheckingAccount {
   static _totalAccounts = 0;

   constructor(number, agency, customer) {
      this._number = number;
      this._agency = agency;
      this._customer = customer;
      this._balance = 0;
      Account._totalAccounts++;
   }

   toWithdraw(value) {
      if (this._balance <= value || value <= 0)
         return -1;
      this._balance -= value;
      return `The withdraw was successful: ${value}`;
   }
   deposit(value) {
      if (value <= 0)
         return -1;
      this._balance += value;
      return `The deposit was successful: ${value}`;
   }
   transfer(value, account) {
      const withdrawnAmount = this.toWithdraw(value);
      const transfer = account.deposit(value);

      return transfer == -1 ? -1 : `The transfer was successful: ${transfer} to ${account.number}:${account.agency}`;
   }

   set customer(customer) {
      if (customer instanceof Customer)
         this._customer = customer;
   }

   get customer() {
      return this._customer;
   }

   get value() {
      return this.value;
   }
}