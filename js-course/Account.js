export class Account {
   number
   agency
   value = 0

   constructor(number, agency) {
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
      if (value <= 0)
         return -1
      this.value += value
      return `The deposit was successful: ${value}`
   }
   transfer(value, account) {
      const withdrawnAmount = this.toWithdraw(value)
      const transfer = account.deposit(value)

      return transfer == -1 ? -1 : `The transfer was successful: ${transfer} to ${account.number}:${account.agency}`
   }
}