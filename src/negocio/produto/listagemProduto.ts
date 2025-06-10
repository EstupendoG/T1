import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar(): void{
        console.log('\n📋 Lista de todos os produtos: ')
        console.log(`--------------------------------------`);
        this.produtos.forEach(produto => {
            console.log(`📦 ID: ${produto.getId}`)
            console.log(`📦 Nome: ${produto.getNome}`)
            console.log(`--------------------------------------`);
        })
    }

}