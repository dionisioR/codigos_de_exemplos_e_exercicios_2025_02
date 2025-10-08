
let ativo = true

function Troca_cor() {

    limparClasse()

    ativo = !ativo

    if (ativo) {

        document.getElementById("body").classList.add("cor_01")

    } else {
        document.getElementById("body").classList.add("cor_02")

    }

}

function limparClasse() {
    document.getElementById("body").classList.remove('cor_01');
    document.getElementById("body").classList.remove('cor_02');
}