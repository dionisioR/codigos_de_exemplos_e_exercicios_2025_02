
let arrNumeros = []
let tBody = document.getElementById('resultado')

function ex121() {
    let n = parseInt(document.getElementById('num').value)

    if (n > 0) {
        let multiplo = ""

        if (n % 2 == 0 && n % 5 == 0) {
            multiplo = "É múltiplo de 2 e de 5"
        } else if (n % 2 == 0) {
            multiplo = "É múltiplo de 2"
        } else if (n % 5 == 0) {
            multiplo = "É múltiplo de 5"
        } else {
            multiplo = '<span class="text-danger">NÃO é múltiplo de 2 e 5</span>'
        }

        objNumero = {
            num: n,
            ehMultiplo: multiplo
        }

        arrNumeros.push(objNumero)
        console.table(arrNumeros);

        tBody.innerHTML = ""
        for(let i = 0; i < arrNumeros.length; i++){
            tBody.innerHTML += `
                <tr>
                    <td>${arrNumeros[i].num}</td>
                    <td>${arrNumeros[i].ehMultiplo}</td>
                </tr>
            `
        }


    } else {
        alert("O número deve ser maior que zero!!!")
    }
}