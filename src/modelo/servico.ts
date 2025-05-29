export default class Servico {
    public nome!: string
    constructor(nome:string){
        this.nome = nome
    }

    get getNome(){
        return this.nome
    }

    setNome(nome:string){
        this.nome = nome
    }
}