function validacaoidade(nome,idade){
    if (idade=>20){
        return nome + "tem " +idade+ " anos e podera entrar na festa";
    }
    else{
        return nome + "tem " +idade+ "nao tem idade para ir na festa";
    }
}


mensagem=validacaoidade("Ghost ",20);
console.log(mensagem);