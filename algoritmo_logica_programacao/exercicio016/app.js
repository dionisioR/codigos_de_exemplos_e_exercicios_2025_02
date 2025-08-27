let num_01 = parseFloat(prompt('Digite o primeiro número:'))
let num_02 = parseFloat(prompt('Digite o segundo número:'))


let soma = num_01 + num_02
let sub = num_01 - num_02
let mult = num_01 * num_02
let div = num_01 / num_02
// let media = (num_01 + num_02)/2
let media = soma / 2
let resto = num_01 % num_02

// concatenação
// document.getElementById('resultado').innerHTML = "A soma dos números " + num_01 + " e " + num_02 + " é  " + soma + "<br>" +
// "A subtração dos números " + num_01 + " e " + num_02 + " é " + sub + "<br>" +
// "A multiplicação dos números " + num_01 + " e " + num_02 + " é " + mult + "<br>" +
// "A divisão dos números " + num_01 + " e " + num_02 + " é " + div + "<br>" +
// "A média dos números " + num_01 + " e " + num_02 + " é " + media + "<br>" +
// "O resto entre números " + num_01 + " e " + num_02 + " é " + resto


// interpolação

document.getElementById('resultado').innerHTML = `
    A soma dos números ${num_01} e ${num_02} é ${soma} <br>
    A subtração dos números ${num_01} e ${num_02} é ${sub} <br>
    A multiplicação dos números ${num_01} e ${num_02} é ${mult} <br>
    A divisão dos números ${num_01} e ${num_02} é ${div} <br>
    A média dos números ${num_01} e ${num_02} é ${media} <br>
    O resto entre os números ${num_01} e ${num_02} é ${resto} <br>
    <hr>
    Soma: ${num_01} ${num_02}
`

