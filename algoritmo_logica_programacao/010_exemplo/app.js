
let div = document.getElementById('resultado')

let alunos = []

function cadastrar(){

    let aluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        curso: document.getElementById('curso').value,
  
    }

    alunos.push(aluno)

    // console.log(alunos)
    div.innerHTML = ''
    for(let i = 0; i <alunos.length; i++){
        div.innerHTML += `
        <div class="col-6 col-md-3 col-lg-4">
            <div class="p-3 border border-info my-3">
                <h2 class="h4 alert alert-info">Alunos</h2>
                Nome: ${alunos[i].nome} <br>
                Idade: ${alunos[i].idade} <br>
                Curso: ${alunos[i].curso} <br>
            </div>
        </div>
        `
    }


}