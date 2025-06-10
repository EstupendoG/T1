import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemProduto from "../negocio/produto/listagemProduto";

export default class mainProduto {
    public options(){
        let empresa = new Empresa()
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

            let entrada = new Entrada()
            console.log('')
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listagemProduto = new ListagemProduto(empresa.getProdutos)
                    listagemProduto.listar()
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