export class Account {

   constructor(initialBalance, customer, agency) {
      this._balance = initialBalance;
      this._customer = customer;
      this._agency = agency;
   }

   toWithdraw(value) {
      if (this._balance < value || value < 0)
         return -1;
      this._balance -= value;
      return value;
   }
   deposit(value) {
      if (this.value <= 0)
         return -1;
      this._balance += value;
      return value;
   }
   transfer(value, account) {
      const withdrawnAmount = this.sacar(value);

      return account.deposit(withdrawnAmount);
   }

}