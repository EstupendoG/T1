import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemProduto from "../negocio/produto/listagemProduto";
import AtualizacaoProduto from "../negocio/produto/atualizacaoProduto";
import RemocaoProduto from "../negocio/produto/remocaoProduto";

export default class mainProduto {
    private empresa: Empresa
    constructor(empresa: Empresa){
        this.empresa = empresa
    }

    public options(){
        let execucao = true

        while (execucao) {
            console.log(`\n📦 PRODUTOS`)
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Atualizar produto`);
            console.log(`4 - Remover produto`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroProduto(this.empresa.getProdutos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemProduto(this.empresa.getProdutos)
                    listagem.listar()
                    break;
                case 3:
                    let atualizacao = new AtualizacaoProduto(this.empresa.getProdutos)
                    atualizacao.atualizar()
                    break;
                case 4:
                    let remocao = new RemocaoProduto(this.empresa.getProdutos)
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