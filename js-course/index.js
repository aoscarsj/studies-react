import { Employee } from './Employee/Employee.js'
import { Director } from './Employee/Director.js'
import { Manager } from './Employee/Manager.js'
import { AuthenticationSystem } from './AuthenticationSystem.js'
import { Customer } from './Customer.js'


const director = new Director("Artur", 10000, 12345678900)
const manager = new Manager("Oscar", 5000, 987654321123)
const client = new Customer("Junior", 12345678900, 998877)

console.log(director)

//const AuthenticationSystem = new AuthenticationSystem("")
director.createPassword(1234)

console.log(AuthenticationSystem.login(director, 1234))
console.log(AuthenticationSystem.login(manager, 1234)); // it's crazy.
console.log(AuthenticationSystem.login(client, 998877));