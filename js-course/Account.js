export class Account {
   static _totalAccounts = 0;
   constructor(initialBalance, customer, agency) {
      this._balance = initialBalance;
      this._customer = customer;
      this._agency = agency;
      this._number = Account._totalAccounts++ + 1;
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
   set customer(customer) {
      if (customer instanceof Customer)
         this._customer = customer;
   }

   get customer() {
      return this._customer;
   }

   get balance() {
      return this._balance;
   }
}