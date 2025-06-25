import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n📋 Lista de todos os clientes:`);
        console.log(`--------------------------------------`);
        
        if(this.clientes.length === 0){
            console.log("\n❌ Não há clientes a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        this.clientes.forEach(cliente => {
            console.log(`👤 Nome: ` + cliente.getNome);
            console.log(`👤 Nome social: ` + cliente.getNomeSocial);
            console.log(`👤 CPF: ${cliente.getCpf.getValor} - Emitido em ${cliente.getCpf.getDataEmissao} `);
            // RG's
            if(cliente.getRgs.length > 0) {
                console.log(`🎫  RGs`);
                let rgAmount = 0
                cliente.getRgs.forEach(rg => {
                    rgAmount++
                    console.log(`${rgAmount} - ${rg.getValor} - Emitido em ${rg.getDataEmissao}`)
                })
            }

            // Telefones
            if(cliente.getTelefones.length > 0) {
                console.log(`📞 Telefones`);
                let phoneAmount = 0
                cliente.getTelefones.forEach(phone => {
                    phoneAmount++
                    console.log(`${phoneAmount} - (${phone.getDdd}) ${phone.getNumero}`)
                })
            }

            console.log(`📅 Cadastrado em ${cliente.getDataCadastro}`)

            console.log(`--------------------------------------`);
        });
    }
}