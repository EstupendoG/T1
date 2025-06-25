import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroConsumo from "../negocio/consumo/cadastroConsumo";
import Top10Clientes from "../negocio/consumo/top10Clientes";
import TopMaisConsumidos from "../negocio/consumo/topMaisConsumidos";
import Top5Clientes from "../negocio/consumo/top5Clientes";

export default class mainConsumo {
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
            console.log(`1 - Cadastrar consumo`);
            console.log(`2 - Listar os 10 Clientes que mais consumiram`);
            console.log(`3 - Listar os Produtos e Serviços mais consumidos`);
            console.log(`5 - Listar os 5 Clientes que mais gastaram`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroConsumo(this.empresa)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem1 = new Top10Clientes(this.empresa)
                    listagem1.listar()
                    break;
                case 3:
                    let listagem2 = new TopMaisConsumidos(this.empresa)
                    listagem2.listar()
                    break;
                // case 4:
                //     let remocao = new RemocaoCliente(this.empresa.getClientes)
                //     remocao.remover()
                //     break;
                case 5:
                    let listagem4 = new Top5Clientes(this.empresa)
                    listagem4.listar()
                    break
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