import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";

export default class mainCliente {
    public options(){
        let empresa = new Empresa()
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

            let entrada = new Entrada()
            console.log('')
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemCliente = new ListagemClientes(empresa.getClientes)
                    listagemCliente.listar()
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