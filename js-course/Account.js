import { Customer } from './Customer.js';

export class Account {
   static _totalAccounts = 0
   number;
   agency;
   _customer;
   _value = 0;

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

   constructor(number, agency, customer) {
      this.number = number;
      this.agency = agency;
      this._customer = customer;
      Account._totalAccounts++;
   }

   toWithdraw(value) {
      if (this._value <= value || value <= 0)
         return -1;
      this._value -= value;
      return `The withdraw was successful: ${value}`;
   }
   deposit(value) {
      if (value <= 0)
         return -1;
      this._value += value;
      return `The deposit was successful: ${value}`;
   }
   transfer(value, account) {
      const withdrawnAmount = this.toWithdraw(value);
      const transfer = account.deposit(value);

      return transfer == -1 ? -1 : `The transfer was successful: ${transfer} to ${account.number}:${account.agency}`;
   }
}