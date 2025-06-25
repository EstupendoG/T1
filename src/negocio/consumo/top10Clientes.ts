import Listagem from "../listagem";
import Empresa from "../../modelo/empresa";
import Consumo from "../../modelo/consumo";
import Cliente from "../../modelo/cliente";

export default class Top10Clientes extends Listagem{
    private empresa : Empresa
    private consumos: Array<Consumo>
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.empresa  = empresa
        this.consumos = empresa.getConsumos
        this.clientes = empresa.getClientes
    }

    public listar(): void {
        console.log('\n📋 Lista dos top 10 clientes que mais consumiram: ')
        console.log(`--------------------------------------`);
        
        if(this.consumos.length === 0){
            console.log("\n❌ Não há consumos a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        const cpfs: { [cpf: string]: number } = {}
        for(let consumo of this.consumos){
            let cpf = consumo.getCliente.getValor
            if(!cpfs[cpf]){
                cpfs[cpf] = 0
            }
            cpfs[cpf] += consumo.getQuantidade
        }

        let top10 = Object.entries(cpfs)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        
        for (let [cpf, total] of top10) {
            const cliente = this.clientes.find(c => c.getCpf.getValor === cpf);
            if (cliente) {
                console.log(`👤 ${cliente.getNome}`);
                console.log(`👤CPF: ${cpf}`);
                console.log(`👤Total consumido: ${total}`);
                console.log(``);
            }
        }
        
    }
}