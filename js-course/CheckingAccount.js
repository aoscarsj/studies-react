import { Account } from './Account.js'

export class CheckingAccount extends Account {

   constructor(customer, agency) {
      super(0, customer, agency);
      this._fee = 0.01;
   }
   //Override
   toWithdraw(value) {
      return super.toWithdraw(value * (1 + this._fee));
   }
}