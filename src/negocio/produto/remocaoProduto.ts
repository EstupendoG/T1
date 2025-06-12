import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Remocao from "../remocao";

export default class RemocaoProduto extends Remocao{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public remover(): void {
        console.log(`\n🗑️- Remoção de Produto`);
        console.log(`--------------------------------------`);  

        if(this.produtos.length === 0){
            console.log("❌ Não há produtos a serem removidos!")
            console.log("⏳ Retornando...")
            return
        }

        let id = this.entrada.receberNumero("✎  Por favor informe o id do produto a ser removido: ")
        
        let listaIds = this.produtos.map((x) => x.getId)
        if(!listaIds.includes(id)){
            console.log("❌ Nenhum produto foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }

        let confirmacao = (this.entrada.receberTexto(`⚠️ Você tem certeza que deseja remover esse produto? (S/N): `)).toLowerCase()

        while(confirmacao != "s" && confirmacao != "n"){
            console.log("❌ Valor Inválido!")
            confirmacao = (this.entrada.receberTexto("❌ Escolha somente entre S ou N: ")).toLowerCase()
        }

        if(confirmacao == 'n'){
            console.log("\n⏳ Retornando...")
            return
        }

        console.log(`\n⏳ Removendo produto...`)
        for(let produto of this.produtos){
            if(produto.getId === id){
                let i = this.produtos.indexOf(produto)
                this.produtos.splice(i,1)
            }
        }
        
        console.log(`✅ Produto ${id} removido!`)

    }
}