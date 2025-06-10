export default class Produto {
    public id!: number
    public nome!: string
    constructor( id:number , nome:string){
        this.nome = nome
        this.id = id
    }

    get getNome(){
        return this.nome
    }

    get getId(){
        return this.id
    }

    setNome(nome:string){
        this.nome = nome
    }
}