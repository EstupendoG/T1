import Entrada from "../../io/entrada"
import Cadastro from "./../cadastro"
import Produto from "../../modelo/produto"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n📝 Cadastro de Produto`);
        console.log(`--------------------------------------`);  
        let nome = this.entrada.receberTexto(`✎  Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`✎  Por favor informe o valor desse produto: R$`)

        let id = 1
        if(this.produtos.length > 0){
            let maiorId = Math.max(...this.produtos.map((x) => x.id))
            id = maiorId + 1
        }

        let produto = new Produto(id,nome,valor);
        
        this.produtos.push(produto)
        console.log(`\n✅ Cadastro concluído :)`);
    }
}