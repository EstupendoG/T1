import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Remocao from "../remocao";

export default class RemocaoCliente extends Remocao{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public remover(): void {
        console.log(`\n🗑️ Remoção de Cliente`);
        console.log(`--------------------------------------`);  

        if(this.clientes.length === 0){
            console.log("❌ Não há clientes a serem removidos!")
            console.log("⏳ Retornando...")
            return
        }

        let cpf = this.entrada.receberTexto("✎  Por favor informe o cpf do cliente a ser removido: ")
        
        let listaCpfs = this.clientes.map((x) => x.getCpf.getValor)
        if(!listaCpfs.includes(cpf)){
            console.log("❌ Nenhum cliente foi atribuído a esse CPF")
            console.log("⏳ Retornando...")
            return
        }

        let confirmacao = (this.entrada.receberTexto(`⚠️ Você tem certeza que deseja remover esse cliente? (S/N): `)).toLowerCase()

        while(confirmacao != "s" && confirmacao != "n"){
            console.log("❌ Valor Inválido!")
            confirmacao = (this.entrada.receberTexto("❌ Escolha somente entre S ou N: ")).toLowerCase()
        }

        if(confirmacao == 'n'){
            console.log("\n⏳ Retornando...")
            return
        }

        console.log(`\n⏳ Removendo cliente...`)
        for(let cliente of this.clientes){
            if(cliente.getCpf.getValor === cpf){
                let i = this.clientes.indexOf(cliente)
                this.clientes.splice(i,1)
            }
        }
        
        console.log(`✅ Cliente ${cpf} removido!`)

    }
}