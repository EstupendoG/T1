import Entrada from "../io/entrada";
import mainCliente from "./mainCliente";

console.log(`🐱🦜 PET LOVERS`)
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let execucao = true

while (execucao) {
    console.log(`\n🏠 PÁGINA INICIAL`)
    console.log(`☰ Opções:`);
    console.log(`--------------------------------------`);
    console.log(`1 - Clientes`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let clientPage = new mainCliente()
    console.log('')
    let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            clientPage.options()
            break;
        case 0:
            execucao = false
            console.log(`👋 Até mais`)
            break;
        default:
            console.log(`⚠️ Operação não entendida :( \n`)
    }
}