import Entrada from "../../io/entrada";
import Atualizacao from "../atualizacao";
import Produto from "../../modelo/produto";

export default class AtualizacaoProduto extends Atualizacao{
    private produto: Array<Produto>
    private entrada: Entrada

    constructor(produtos:Array<Produto>){
        super()
        this.produto = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n🔄 Atualização de Produto:`);
        console.log(`--------------------------------------`);  
        
        if(this.produto.length === 0){
            console.log("❌ Não há produtos a serem atualizados!")
            console.log("⏳ Retornando...")
            return
        }

        let produto: Produto | undefined

        let id = this.entrada.receberNumero("✎  Por favor informe o id do produto a ser atualizado: ")
        let listaIds = this.produto.map((x) => x.getId)
        
        if(!listaIds.includes(id)){
            console.log("❌ Nenhum produto foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }
        
        for(let x of this.produto){
            x.getId === id && (produto = x)
        }
        
        console.log('\nℹ️ Deixe o campo vazio caso você não queira atualizar seu valor!')
        let nome = this.entrada.receberTexto('✎  Informe o novo nome do produto: ')
        let valor = this.entrada.receberNumero('✎  Informe o novo preço do produto: R$')
        
        console.log(`⏳ Atualizando produto...`)
        nome && produto?.setNome(nome)
        valor && produto?.setValor(valor)

        console.log(`✅ Produto ${id} atualizado!`)
    }


}
