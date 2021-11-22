//Off topic -- Destructuring
const [num1, num2, ...othersNumbers] = [1, 2, 3, 4, 5, 6, 7]
console.log(num1, num2, othersNumbers);

const [nome1 = 'DefaultValue'] = []
const [nome2 = 'DefaultValue'] = [1]

const pessoa = {
   nome: "Artur",
   idade: 23
}
const pessoaWithTel = { ...pessoa, tel: 71999998888 }
const { idade } = pessoa