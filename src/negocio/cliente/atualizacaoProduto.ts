import Entrada from "../../io/entrada";
import Atualizacao from "../atualizacao";
import Cliente from "../../modelo/cliente";

export default class AtualizacaoCliente extends Atualizacao{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n🔄 Atualização de Cliente:`);
        console.log(`--------------------------------------`);  
        
        if(this.clientes.length === 0){
            console.log("\n❌ Não há clientes a serem atualizados!")
            console.log("⏳ Retornando...")
            return
        }

        let cliente: Cliente | undefined

        let cpf = this.entrada.receberTexto("✎  Por favor informe o CPF do cliente a ser atualizado: ")
        let listaCpfs = this.clientes.map((x) => x.getCpf.getValor())

        if(!listaCpfs.includes(cpf)){
            console.log("❌ Nenhum cliente foi atribuído a esse CPF")
            console.log("⏳ Retornando...")
            return
        }

        for(let x of this.clientes){
            x.getCpf.getValor === cpf && (cliente = x)
        }
                
        let nome = this.entrada.receberTexto('✎  Informe o novo nome do cliente: ')
        
        console.log(`⏳ Atualizando cliente... ${cpf}`)
        cliente?.setNome(nome)

        console.log(`✅ Cliente ${cpf} atualizado!`)
    }
}
