export default class FuncoesDado{
    constructor(){

    }
    rolar(max,min){
        max = Math.ceil(max);
        min =Math.floor(min);
        var numero =Math.ceil(Math.random() * (min-max)+max);
        return numero
    }
    rolarAtributos(inteligencia, atributo){
        var maior = 0;
        for (var i=0; i < inteligencia; i++){
            var n1 = this.rolar(1, atributo+1);
            if(maior < n1){
                maior = n1;
            }
        }
        return maior;
    }
}