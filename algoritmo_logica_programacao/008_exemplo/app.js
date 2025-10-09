
let div = document.getElementById('resultado')

let nomes = []

function cadastrar(){

    let nome = document.getElementById('nome').value
    nomes.push(nome)

    console.log(nomes);

    div.innerHTML = ''
    for(let i = 0; i < nomes.length ;i++){
        div.innerHTML +=`NOME: ${nomes[i]}.<br> `
    }
}