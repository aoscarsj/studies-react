export class Account {
   number
   agency
   value = 0

   Account(number, agency) {
      this.number = number;
      this.agency = agency;
   }

   toWithdraw(value) {
      if (this.value <= value || value <= 0)
         return -1
      this.value -= value
      return `The withdraw was successful: ${value}`
   }
   deposit(value) {
      if (valor <= 0)
         return -1
      this.value += valor
      return `The deposit was successful: ${valor}`
   }
   transfer(value, account) {
      withdrawnAmount = this.toWithdraw(value)
      transfer = account.deposit(withdrawnAmount)
      if (transfer == -1)
         return -1
      return `The transfer was successful: ${transfer} to ${account}`
   }
}