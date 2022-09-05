//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []


//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
//nome: string;
// preco: number;
// disponibilidade: boolean
const fruta1 = {
    nome: ("morango"),
    preco: 6.99,
    disponibilidade: true
}
const fruta2 = {
    nome: ("uva"),
    preco: 9.99,
    disponibilidade: true
}
const fruta3 = {
    nome: ("melão"),
    preco: 3.99,
    disponibilidade: false
}
const sacolaoCopia = sacolao.slice()
//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolaoCopia.push({fruta1})
sacolaoCopia.push({fruta2})
sacolaoCopia.push({fruta3})

console.log (sacolao)
console.log (sacolaoCopia)