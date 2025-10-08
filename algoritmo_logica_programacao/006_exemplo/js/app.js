
let ativo = true

function trocar_cor(){

    limparClasses()
    
    ativo = !ativo

    if(ativo){
        document.getElementById('body').classList.add("cor_01")
    }else{
        document.getElementById('body').classList.add("cor_02")
    }
        

}

function limparClasses(){
    document.getElementById('body').classList.remove("cor_01")
    document.getElementById('body').classList.remove("cor_02")
}