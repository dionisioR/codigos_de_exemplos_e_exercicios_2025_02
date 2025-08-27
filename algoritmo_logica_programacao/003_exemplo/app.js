// let num_1 = prompt("Digite o primeiro número: ")
// let num_2 = prompt("Digite o segundo número: ")
// let soma = num_1 + num_2
// let soma2 = parseFloat(num_1) + parseFloat(num_2)
// console.log(num_1, num_2, soma ,soma2)

let num_1 = document.getElementById('nome').value
let num_2 = parseFloat(prompt("Digite o segundo número:"))

let soma = num_1 + num_2
let div = num_1 / num_2
let mult = num_1 * num_2
let sub = num_1 - num_2

console.log("A soma foi: " + soma);
console.log("A divisão foi: " + div.toFixed(3));
console.log("A multiplicação foi: " + mult);
console.log("A subtração foi: " + sub);

document.getElementById('txt').innerHTML = "A soma foi: " + soma + "<br>A divisão foi: " + div.toFixed(3) + "<br>A multiplicação foi: " + mult + "<br>A subtração foi: " + sub
