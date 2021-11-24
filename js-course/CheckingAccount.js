import { Account } from './Account.js'

export class CheckingAccount extends Account {

   constructor(customer, agency) {
      super(0, customer, agency);
   }
}