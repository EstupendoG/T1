import Listagem from "../listagem";
import Empresa from "../../modelo/empresa";
import Consumo from "../../modelo/consumo";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class Top5Clientes extends Listagem{
    private empresa : Empresa
    private clientes: Array<Cliente>
    private consumos: Array<Consumo>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.empresa  = empresa
        this.clientes = empresa.getClientes
        this.consumos = empresa.getConsumos
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    public listar(): void {
        console.log('\n📋 Lista dos top 5 clientes que mais gastaram: ')
        console.log(`--------------------------------------`);
        
        if(this.consumos.length === 0){
            console.log("\n❌ Não há consumos a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        const cpfs: { [cpf: string]: number } = {}
        for(let consumo of this.consumos){
            let cpf = consumo.getCliente.getValor

            if (!cpfs[cpf]) {
                cpfs[cpf] = 0;
            }

            let valor = 0
            if(consumo.getProduto){
                const produto = this.produtos.find((p) => p.getId === consumo.getProduto)
                if(produto){
                    valor += produto.getValor * consumo.getQuantidade
                }
            }
            else if(consumo.getServico){
                const servico = this.servicos.find((s) => s.getId === consumo.getServico)
                if(servico){
                    valor += servico.getValor * consumo.getQuantidade
                }
            }

            cpfs[cpf] = (cpfs[cpf] || 0) + valor

        }

        let top5 = Object.entries(cpfs)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        
        for (let [cpf, valor] of top5) {
            const cliente = this.clientes.find(c => c.getCpf.getValor === cpf);
            if (cliente) {
                console.log(`👤 ${cliente.getNome}`);
                console.log(`👤 CPF: ${cpf}`);
                console.log(`👤 Total consumido: R$ ${valor}`);
                console.log(``);
            }
        }
        
    }
}