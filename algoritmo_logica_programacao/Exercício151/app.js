let total = document.getElementById('total')
let row = document.getElementById('resultado')

let arrPalavras = []

function ex() {

    let p = document.getElementById('texto').value
    console.log(p);
    p = p.toUpperCase()
    p = p.toLowerCase()
    console.log(p);


    if (p.length >= 3) {


        let contador = 0
        let corCard = ''

        // ana / ANA  / Ana
        for (let i = 0; i < p.length; i++) {

            // p[i] = p[i].toLowerCase()
            // console.log(p[i]);
            switch (p[i]) {
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    contador++
                    break
            }

            console.log(contador);

            if (contador >= 3 && contador <= 5) {
                corCard = "alert alert-danger"
            } else if (contador >= 6 && contador <= 10) {
                corCard = "alert alert-primary"
            } else if (contador > 10) {
                corCard = "alert alert-success"
            }
        }

        let objPalavra = {
            palavraDigitada: p,
            qtdVogal: contador,
            cor: corCard,
        }

        arrPalavras.push(objPalavra)
        console.log(arrPalavras);

        total.innerHTML = `
     <p>Total de palavras: <br> ${arrPalavras.length}</p>
    `

        row.innerHTML = ''
        for (let i = 0; i < arrPalavras.length; i++) {
            row.innerHTML += `
             <div class="${arrPalavras[i].cor} col-2">
                <strong>Palavra:</strong> ${arrPalavras[i].palavraDigitada}  <br>
                <strong>Qtd. Vogais: </strong> ${arrPalavras[i].qtdVogal}
            </div>
        `
        }

    }else{
        alert("A palavra deve ter no mínimo 3 caracteres....")
    }
}