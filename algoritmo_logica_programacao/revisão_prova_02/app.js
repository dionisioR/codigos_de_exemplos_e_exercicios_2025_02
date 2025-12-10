let body = document.getElementById('resultado')

let arrPalavras = []

function prova() {


    let p = document.getElementById('palavra').value
    

    let stringVogais = ''
    let stringConsoantes = ''
    let qTotalVogais = 0
    let qTotalConsoantes = 0
    let qVogaisMaiusculas= 0
    let qVogaisMinusculas= 0

    // console.log(p.length);
    if (p.length >= 7) {
        //ok

        // Percorrer a palavra
        for (let i = 0; i < p.length; i++) {

            // console.log(p[i]);

            switch (p[i]) {
                case "A":
                case "E":
                case "I":
                case "O":
                case "U":
                    qVogaisMaiusculas++
                    qTotalVogais++
                    stringVogais += p[i]
                    break
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    qVogaisMinusculas++
                    qTotalVogais++
                    stringVogais += p[i]
                    break
                default:
                    qTotalConsoantes++
                    stringConsoantes+=p[i]

            }

        }



        objPalavra = {
            palavra: p,
            todasAsVogais: stringVogais,
            todasAsConsoante: stringConsoantes,
            qtdVogais: qTotalVogais,
            qtdConsoantes: qTotalConsoantes,
            qtdVogaisMaiusculas: qVogaisMaiusculas,
            qtdVogaisMinusculas: qVogaisMinusculas
        }

        arrPalavras.push(objPalavra)

        // percorrendo o Array de obj
        body.innerHTML = ''
        for (let i = 0; i < arrPalavras.length; i++) {
            body.innerHTML += `
                <tr>
                    <td>${arrPalavras[i].palavra}</td>
                    <td>${arrPalavras[i].todasAsVogais}</td>
                    <td>${arrPalavras[i].todasAsConsoante}</td>
                    <td>${arrPalavras[i].qtdVogais}</td>
                    <td>${arrPalavras[i].qtdConsoantes}</td>
                    <td>${arrPalavras[i].qtdVogaisMaiusculas}</td>
                    <td>${arrPalavras[i].qtdVogaisMinusculas}</td>
         
                </tr>
            `

        }


    } else {
        alert("Erro.... Digite uma palavra com 7 caracteres ou mais")
    }



}