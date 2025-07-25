import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServico";
import AtualizacaoServico from "../negocio/servico/atualizacaoServicos";
import RemocaoServico from "../negocio/servico/remocaoServico";

export default class mainServico {
    private empresa: Empresa
    constructor(empresa: Empresa){
        this.empresa = empresa
    }

    public options(){
        let execucao = true

        while (execucao) {
            console.log(`\n🛠️ SERVIÇOS`)
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Cadastrar serviço`);
            console.log(`2 - Listar todos os serviços`);
            console.log(`3 - Atualizar serviços`);
            console.log(`4 - Remover serviços`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroServico(this.empresa.getServicos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemServicos(this.empresa.getServicos)
                    listagem.listar()
                    break;
                case 3:
                    let atualizacao = new AtualizacaoServico(this.empresa.getServicos)
                    atualizacao.atualizar()
                    break;
                case 4:
                    let remocao = new RemocaoServico(this.empresa.getServicos)
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