export class Customer {

   constructor(name, cpf) {
      this.name = name;
      this._cpf = cpf;
   }

   get cpf() {
      return this._cpf;
   }
}