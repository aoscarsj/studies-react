export class Employee {

   constructor(name, salary, cpf) {
      this._name = name
      this._salary = salary
      this._cpf = cpf
      this._bonus = 1
      this._password = null
   }
   get password() { return this._password }
   registerPassword(password) {
      this._password = password
   }
   createPassword(password) {
      this._password = password
   }

   auth(password) {
      return this._password === password
   }
}