import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar(): void{
        console.log('Lista de todos os produtos: ')
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}`)
            console.log(`--------------------------------------`);
        })
        console.log('\n')
    }

}