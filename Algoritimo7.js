function girardado(){
    min =Math.ceil(1);
    max =Math.floor(21);
    numero =Math.floor(Math.random()* (max+min)-min);
    return numero
}


mensagem="o numero obtido foi "+girardado();
console.log(mensagem);