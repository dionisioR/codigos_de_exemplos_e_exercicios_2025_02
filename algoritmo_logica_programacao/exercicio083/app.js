let negativo = 0
let positivo = 0
let nulo = 0
let contador = 0

function enviar() {

    let num_01 = parseFloat(document.getElementById('n1').value)
    contador++

    if(contador <= 10){
        
        document.getElementById('n_digitado').innerHTML += `${num_01}  `

        if(num_01 > 0){
            positivo++
        }else if(num_01 < 0){
            negativo++
        }else{
            nulo++
        }

        document.getElementById('contador').innerHTML = `Contador: ${contador}`

    }else{
        
        document.getElementById('contador').innerHTML = `FIM`

    }

    document.getElementById('positivo').innerHTML = `Números positivos: ${positivo}`
    document.getElementById('negativo').innerHTML = `Números negativos: ${negativo}`
    document.getElementById('nulo').innerHTML = `Números nulos: ${nulo}`






}