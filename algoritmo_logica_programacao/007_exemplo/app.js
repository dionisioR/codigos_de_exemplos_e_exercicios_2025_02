
// let soma = 0
// let aux = 0
// for(let i = 0; i<=10; i++){
//     soma += i
//     aux = i
//     console.log(i + ' - ' + soma);

//     //-----------------------
//     document.getElementById('txt').innerHTML += `
//  Contador nº ${aux} - Soma: ${soma} <br>
// `
// }


// let i = 0
// let soma = 0

// while(i <= 10){
//     soma += i
//     i++
// }
//  document.getElementById('txt').innerHTML = `
//  Soma: ${soma} `

let i = 1
let soma = 0
do{

    soma += i
    if(i % 7 == 0){
        break
    }
    i++
    console.log(soma);

}while(i <= 10)
    
 document.getElementById('txt').innerHTML = `
 Soma: ${soma} `