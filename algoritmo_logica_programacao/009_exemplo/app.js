
let div = document.getElementById('resultado')


function cadastrar(){

    let aluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        curso: document.getElementById('curso').value,
    }
    console.log(aluno)
    div.innerHTML = `
        Nome: ${aluno.nome} - 
        Idade: ${aluno.idade} - 
        Curso: ${aluno.curso}
    `

}