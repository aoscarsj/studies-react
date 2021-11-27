import { Account } from './Account.js'

export class SalaryAccount extends Account {

   constructor(customer) {
      super(0, customer, 1001);
   }
   toWithdraw(value) {
      const fee = 0.02;
      return this._toWithdraw(value, fee)
   }
}