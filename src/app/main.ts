import Entrada from "../io/entrada";
import mainCliente from "./mainCliente";
import mainProduto from "./mainProduto";
import mainServico from "./mainServico";

console.log(`🐱🦜 PET LOVERS`)
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let execucao = true

while (execucao) {
    console.log(`\n🏠 PÁGINA INICIAL`)
    console.log(`☰ Opções:`);
    console.log(`--------------------------------------`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let pageClientes = new mainCliente()
    let pageProdutos = new mainProduto()
    let pageServicos = new mainServico()
    console.log('')
    let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            pageClientes.options()
            break;
        case 3:
            pageProdutos.options()
            break;
        case 4:
            pageServicos.options()
            break;
        case 0:
            execucao = false
            console.log(`👋 Até mais`)
            break;
        default:
            console.log(`⚠️ Operação não entendida :( \n`)
    }
}