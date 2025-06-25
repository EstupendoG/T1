import Listagem from "../listagem";
import Empresa from "../../modelo/empresa";
import Consumo from "../../modelo/consumo";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class TopMaisConsumidos extends Listagem{
    private empresa : Empresa
    private consumos: Array<Consumo>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.empresa  = empresa
        this.consumos = empresa.getConsumos
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    public listar(): void {
        
        if(this.consumos.length === 0){
            console.log("\n❌ Não há consumos a serem listados!")
            console.log("⏳ Retornando...")
            return
        }
        // Produtos
        console.log('\n📋 Lista dos produtos mais consumidos: ')
        console.log(`--------------------------------------`);
        
        if(!this.consumos.find((consumo) => consumo.getProduto)){
            console.log("\n❌ Nenhum consumo de produto foi registrado!")
            console.log("⏳ Prosseguindo...")
        }
        
        else{
            const produtoIds: { [id: number]: number} = {}
            for(let consumo of this.consumos){
                let id = consumo.getProduto
                if(!produtoIds[id!]){
                    produtoIds[id!] = 0
                }
                produtoIds[id!] += consumo.getQuantidade
            }
            let rank = Object.entries(produtoIds)
                .sort((a,b) => b[1] - a[1])
    
            for (let [id, total] of rank) {
                const produto = this.produtos.find((p) => p.getId === Number(id))
                if(produto) {
                    console.log(`📦 ${produto.getNome}`);
                    console.log(`📦 ID: ${produto.getId}`);
                    console.log(`📦 Total consumido: ${total}`);
                    console.log(``);
                }
            }
        }

        // Serviços
        console.log('\n📋 Lista dos produtos mais consumidos: ')
        console.log(`--------------------------------------`);
        if(!this.consumos.find((consumo) => consumo.getServico)){
            console.log("\n❌ Nenhum consumo de serviço foi registrado!")
            console.log("⏳ Retornando...")
            return
        }
        
        else{
            const servicosIds: { [id: number]: number} = {}
            for(let consumo of this.consumos){
                let id = consumo.getServico
                if(!servicosIds[id!]){
                    servicosIds[id!] = 0
                }
                servicosIds[id!] += consumo.getQuantidade
            }
            let rank = Object.entries(servicosIds)
                .sort((a,b) => b[1] - a[1])
    
            for (let [id, total] of rank) {
                const servico = this.servicos.find((s) => s.getId === Number(id))
                if(servico) {
                    console.log(`🛠️  ${servico.getNome}`);
                    console.log(`🛠️  ID: ${servico.getId}`);
                    console.log(`🛠️  Total consumido: ${total}`);
                    console.log(``);
                }
            }
        }
        
        
    }
}