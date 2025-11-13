let nota = 75;
let desempenho = "";

if (nota >= 90) {
    desempenho = "Excelente";
} else if (nota >= 80) {
    desempenho = "Muito Bom";
} else if (nota >= 70) {
    desempenho = "Bom";
} else if (nota >= 60) {
    desempenho = "Regular";
} else {
    desempenho = "Insatisfatório";
}

console.log("O desempenho do aluno é: " + desempenho);
