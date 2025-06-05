import { deflate } from "zlib";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProduto from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServico";

export default class mainCliente {
    public options(){
        let empresa = new Empresa()
        let execucao = true

        while (execucao) {
            console.log(`\n👤 CLIENTE`)
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