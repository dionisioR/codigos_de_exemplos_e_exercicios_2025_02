let body = document.getElementById('resultado')
let arrNumero =[]

function ex120(){

    let numero = parseInt(document.getElementById('n').value)
    
    if(numero < 100 || numero > 999){
        alert("ERRO!!! Digite um número entre 100 e 999")
    }else{
        let centena = parseInt(numero / 100)
        
        // let parImpar=""
        // if(centena % 2 == 0){
        //     parImpar = "PAR"
        // }else{
        //     parImpar = "ÍMPAR"
        // }
        
        let parImpar = (centena % 2 == 0) ? "PAR" : "ÍMPAR"

        objNumero = {
            objNum : numero,
            objCentena : centena,
            objParImpar : parImpar
        }

        arrNumero.push(objNumero)

        body.innerHTML = ""
        for(let i = 0; i < arrNumero.length; i++){
                   body.innerHTML += `
                    <tr>
                        <td>${arrNumero[i].objNum}</td>
                        <td>${arrNumero[i].objCentena}</td>
                        <td>${arrNumero[i].objParImpar}</td>
                    </tr>
                   
                   `
        }
    }

}