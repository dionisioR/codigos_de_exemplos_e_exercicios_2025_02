let raio = parseFloat(prompt("Digite o valor do raio: "))
// console.log(typeof raio);
// let area = 4 * PI * r2
let area = 4 * Math.PI * Math.pow(raio,2)
console.log(area);
// let volume = (4 * PI * r3) / 3
let volume = (4 * Math.PI * Math.pow(raio, 3)) / 3
console.log(volume);

document.getElementById('resultado').innerHTML = `
    <p>
        <strong>Área: </strong> ${area.toFixed(3)}. <br>
        <strong>Volume: </strong> ${volume.toFixed(3)}. <br>
    </p>
`