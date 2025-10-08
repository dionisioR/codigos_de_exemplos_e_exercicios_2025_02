function enviar() {

    let num_01 = parseFloat(document.getElementById('n1').value)
    let num_02 = parseFloat(document.getElementById('n2').value)
    let maiorNumero = 0

    if (num_01 > 0 && num_02 > 0) {

        // tudo ok
        if (num_01 > num_02) {
            maiorNumero = num_01
        } else {
            maiorNumero = num_02
        }

        document.getElementById('resultado').innerHTML = `
        <p>
            Os números digitados foram ${num_01} e ${num_02}.<br>
            O maior número é <span>${maiorNumero}</span>.
        </p>`

    } else {
        document.getElementById('resultado').innerHTML = "Números inválidos!"
    }



}