import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import AtualizacaoCliente from "../negocio/cliente/atualizacaoCliente";
import RemocaoCliente from "../negocio/cliente/remocaoCliente";

export default class mainCliente {
    private empresa: Empresa
    constructor(empresa: Empresa){
        this.empresa = empresa
    }
    
    public options(){
        let execucao = true
        
        while (execucao) {
            console.log(`\n👤 CLIENTES`)
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Atualizar cliente`);
            console.log(`4 - Remover cliente`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroCliente = new CadastroCliente(this.empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemCliente = new ListagemClientes(this.empresa.getClientes)
                    listagemCliente.listar()
                    break;
                case 3:
                    let atualizacao = new AtualizacaoCliente(this.empresa.getClientes)
                    atualizacao.atualizar()
                    break;
                case 4:
                    let remocao = new RemocaoCliente(this.empresa.getClientes)
                    remocao.remover()
                    break;
                case 0:
                    execucao = false
                    console.log(`⏳ Retornando...`)
                    break;
                default:
                    console.log(`⚠️ Operação não entendida :( \n`)
            }
        }
    }

}