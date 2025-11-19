let body = document.getElementById('resultado')
let arrMes = []
let aux = 0
let cor = ''

function ex132(){

    let mes = document.getElementById('mes').value

    if(mes <= 0 || mes > 12 ){
        alert("Erro ... Escolha um valor entre 1 e 12")
    }else{
        
        // if(mes == 1 || mes == 3 || mes == 5)
        switch(mes){
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                aux = 31
                cor = "text-success"
                break
            case '2':
                aux = 28
                cor = 'text-primary'
                break
            case '4':
            case '6':
            case '9':
            case '11':
                aux = 30
                cor = 'text-warning'
                break
            default:
            alert("Erro ... Escolha um valor entre 1 e 12")
        }
        
        let objNumero = {
            numeroMes:mes,
            qtdDias: aux,
            corMes: cor
        }
        arrMes.push(objNumero)
        console.log(arrMes);

        body.innerHTML = ''
        for(let i = 0; i < arrMes.length; i++){
            body.innerHTML += `
             <tr>
                <td> <span class="${arrMes[i].corMes}"> ${arrMes[i].numeroMes} </span></td>
                <td> <span class="${arrMes[i].corMes}"> ${arrMes[i].qtdDias} </span></td>
            </tr>
            `
        }
    }

}