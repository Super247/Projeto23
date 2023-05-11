class Inventario{
    #capacidade
    #itens
    #pocoes
    #armas

    constructor(capacidade){
        this.#capacidade=capacidade;
        this.#todositens
        this.#itens =null;
        this.#pocoes=null;
        this.#armas=null;
        this.#pesoTotal=0;
    }
    retornarPesoRestante(){
        return this.#capacidade - this.#pesoTotal;
    }
    adicionarItem(item){
        if (this.#capacidade!=this.pesoTotal && (this.#capacidade-this.pesoTotal)>item.peso){
this.#itens.push(item)
        }
        this.#itens.push(item);
    }
    adicionarPocao(pocao){
        if (this.retornaPesoRestante()>pocao.peso);
       this.#pesoTotal = this.pesoTotal+pocao.peso;
        this.#pocoes.push(pocao)
    }
    adicionararmas(arma){
        this.#armas.push(arma)
    }
}