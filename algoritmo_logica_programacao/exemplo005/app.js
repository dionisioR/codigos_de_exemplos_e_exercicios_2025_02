function verificar(){

    // let num = parseInt(document.getElementById('n_1').value)

    let num = document.getElementById('n_1').value
    let numero = parseInt(num)

    let resultado = (numero%2 == 0) ? "PAR" : "Não é PAR"
    let cor = (numero%2 == 0) ? "primary" : "danger"

    document.getElementById('resultado').innerHTML = `
        <p>
            <strong>Resultado: </strong>
            O número ${numero} é <span class="${cor}"> ${resultado} </span>.
        </p>
    `
    
    console.log(numero, typeof numero);

}

