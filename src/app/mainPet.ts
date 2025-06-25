import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroPet from "../negocio/pet/cadastroPet";
import ListagemPet from "../negocio/pet/listagemPet";
import AtualizacaoPet from "../negocio/pet/atualizacaoPet";
import RemocaoPet from "../negocio/pet/remocaoPet";

export default class mainPet {
    private empresa: Empresa
    constructor(empresa: Empresa){
        this.empresa = empresa
    }

    public options(){
        let execucao = true
        
        while (execucao) {
            console.log(`\n🐱 PETS`)
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Cadastrar pet`);
            console.log(`2 - Listar todos os pets`);
            console.log(`3 - Atualizar pet`);
            console.log(`4 - Remover pet`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroPet(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemPet(this.empresa.getClientes)
                    listagem.listar()
                    break;
                case 3:
                    let atualizacao = new AtualizacaoPet(this.empresa.getClientes)
                    atualizacao.atualizar()
                    break;
                case 4:
                    let remocao = new RemocaoPet(this.empresa.getClientes)
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