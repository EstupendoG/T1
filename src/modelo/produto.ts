export default class Produto {
    public nome!: string
    constructor(nome:string){
        this.nome! = nome
    }
    
    get getNome(){
        return this.nome!
    }

    set setNome(nome: string){
        this.nome! = nome
    }
}