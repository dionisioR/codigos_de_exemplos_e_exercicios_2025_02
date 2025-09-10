let numero_01 = document.getElementById('n_1')
let numero_02 = document.getElementById('n_2')
let div = document.getElementById('resultado')


function soma(){
    let num_01 = numero_01.value
    let num_02 = numero_02.value
    let soma =  parseFloat(num_01) + parseFloat(num_02)

    console.log(num_01, num_02, soma);
    console.log(typeof num_01, typeof num_02, typeof soma);

    div.innerHTML = `
    <p>
        A soma dos números ${num_01} e ${num_02} é ${soma}.
    </p>
    `
    limparForm()
}

function limparForm(){
    numero_01.value = ''
    numero_02.value = ''
    numero_01.focus()
}