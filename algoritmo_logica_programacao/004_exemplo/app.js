let num = 3

// Potência
// num = num * num * num
// Math
let pot = Math.pow(num,2)
console.log(pot);

// raiz quadrada
let raizQ =Math.sqrt(9)
console.log(raizQ);

// raiz cúbica
let raizCb = Math.cbrt(27)
console.log(raizCb);

// PI
// let pi = 3.14
let pi = Math.PI
console.log(pi);

// let area = Math.PI * Math.pow(2,2)
const PI = Math.PI
console.log(PI);
// PI = 10  // vai dar erro


let ceil = Math.ceil(2.1)
console.log(ceil)

let floor = Math.floor(2.9)
console.log(floor);

let round = Math.round(2.4)
console.log(round);

let n1 = 10
let n2 = 20
let n3 = 30
let n4 = -10
let n5 = -20

let maiorN = Math.max(n1, n2, n3, n4, n5)
console.log(maiorN);

let menorN = Math.min(n1, n2, n3, n4, n5)
console.log(menorN);

let randomico = Math.random()
console.log(randomico);

// 1 10

let nomes = ["Ana", "Maria", "João", "Juca", "Renan"]

let nAleatorio = Math.floor(Math.random() * (5 - 0) + 0)
console.log(nAleatorio);
console.log(nomes[nAleatorio]);
console.log('---------------');
console.log(Math.random());