import Entrada from "../io/entrada";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";

import Pet from "../modelo/pet";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Consumo from "../modelo/consumo";

import mainCliente from "./mainCliente";
import mainConsumo from "./mainConsumo";
import mainPet from "./mainPet";
import mainProduto from "./mainProduto";
import mainServico from "./mainServico";

console.log(`🐱🦜 PET LOVERS`)
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

    let execucao = true
    let empresa = new Empresa()

    let pageClientes = new mainCliente(empresa)
    let pagePets = new mainPet(empresa)
    let pageProdutos = new mainProduto(empresa)
    let pageServicos = new mainServico(empresa)
    let pageConsumo = new mainConsumo(empresa)
    let entrada = new Entrada()
    
    while (execucao) {
        console.log(`\n🏠 PÁGINA INICIAL`)
        console.log(`☰ Opções:`);
        console.log(`--------------------------------------`);
        console.log(`1 - Clientes`);
        console.log(`2 - Pets`);
        console.log(`3 - Produtos`);
        console.log(`4 - Serviços`);
        console.log(`5 - Consumo`);
        console.log(`11 - Cadastro para Depuração`);
        console.log(`0 - Sair`);
        console.log('')

        let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

        switch (opcao) {
            case 1:
                pageClientes.options()
                break;
            case 2:
                pagePets.options()
                break;
            case 3:
                pageProdutos.options()
                break;
            case 4:
                pageServicos.options()
                break;
            case 5:
                pageConsumo.options()
                break;
            
            case 11:
                cadastroRapido()
                break;

            case 0:
                execucao = false
                console.log(`👋 Até mais`)
                break;
            default:
                console.log(`⚠️ Operação não entendida :( \n`)
        }
    }
function cadastroRapido() {
    const clientes = empresa.getClientes
    const produtos = empresa.getProdutos
    const servicos = empresa.getServicos
    const consumos = empresa.getConsumos

    // --- Dados base
    const datas = [
        new Date(2025, 5, 22), new Date(2024, 11, 25), new Date(2025, 0, 1), new Date(2025, 3, 10), new Date(2025, 8, 7),
        new Date(2014, 3, 12), new Date(1999, 12, 31), new Date(2001, 9, 11), new Date(2013, 5, 4), new Date(2024, 2, 29)
    ];

    const cpfs = ['123', '987', '456', '321', '789', '439', '128', '256', '512', '317'];

    const nomes = [
        'Ana Clara Ramos', 'Allan Seiti Noguti', 'Victor Schiavon', 'Jean Dias de Paula', 'Rodrigo Ximenes', 'Paulo Ventura', 'Arthur Cervero', 'Cesar Oliveira Cohen', 'Joui Jouki', 'Leon Martins'
    ];

    // --- Criação de clientes
    for (let i = 0; i < cpfs.length; i++) {
        const nome = nomes[i];
        const cpf = new CPF(cpfs[i], datas[i]);
        const cliente = new Cliente(nome, nome, cpf, [], []);
        clientes.push(cliente);
    }
    
    // --- Cadastro de pets (1 por cliente)
    const petsNomes = ['Miel', 'Luna', 'Thor', 'Mel', 'Bob', 'Sushi', 'Banana', 'Max', 'Bidu', 'Aurora'];
    const petsTipos = ['Gato', 'Gato', 'Cachorro', 'Cachorro', 'Papagaio', 'Cachorro', 'Hamster', 'Cachorro', 'Cachorro', 'Peixe'];
    const petsRacas = ['Siamês', 'Siamês', 'SRD', 'Poodle', 'Verde', 'SRD', 'Sírio', 'SRD', 'SRD', 'Betta'];
    const petsGeneros = ['Fêmea', 'Fêmea', 'Macho', 'Fêmea', 'Macho', 'Fêmea', 'Fêmea', 'Macho', 'Macho', 'Fêmea'];

    for (let i = 0; i < clientes.length; i++) {
        const pet = new Pet(i + 1, petsNomes[i], petsTipos[i], petsRacas[i], petsGeneros[i]);
        clientes[i].adicionarPet(pet);
    }

    // --- Cadastro de produtos
    const produtosPadroes = [
        new Produto(1, "Ração Premium", 89.90),
        new Produto(2, "Biscoito Canino", 14.50),
        new Produto(3, "Shampoo Pet", 25.00),
        new Produto(4, "Areia Higiênica", 30.00),
        new Produto(5, "Brinquedo Mordedor", 22.90),
    ];
    produtos.push(...produtosPadroes);

    // --- Cadastro de serviços
    const servicosPadroes = [
        new Servico(1, "Banho e Tosa", 60.00),
        new Servico(2, "Consulta Veterinária", 120.00),
        new Servico(3, "Vacinação", 90.00),
        new Servico(4, "Hospedagem Diária", 150.00),
        new Servico(5, "Adestramento", 200.00),
    ];
    servicos.push(...servicosPadroes);

    // --- Cadastro de consumos (vários por pet)
    const quantidadeAleatoria = () => Math.floor(Math.random() * 3) + 1; // 1 a 3

    for (const cliente of clientes) {
        for (const pet of cliente.getPets) {
            for (let i = 0; i < 3; i++) { // cada pet terá 3 produtos e 3 serviços consumidos
                const produto = produtos[Math.floor(Math.random() * produtos.length)];
                const servico = servicos[Math.floor(Math.random() * servicos.length)];

                const consumoProdutoExistente = consumos.find(x =>
                    x.getPet === pet.getId && x.getProduto === produto.getId
                );
                if (consumoProdutoExistente) {
                    consumoProdutoExistente.adicionarQuantidade(quantidadeAleatoria());
                } else {
                    consumos.push(new Consumo(cliente.getCpf, pet.getId, quantidadeAleatoria(), produto.getId, undefined));
                }

                const consumoServicoExistente = consumos.find(x =>
                    x.getPet === pet.getId && x.getServico === servico.getId
                );
                if (consumoServicoExistente) {
                    consumoServicoExistente.adicionarQuantidade(quantidadeAleatoria());
                } else {
                    consumos.push(new Consumo(cliente.getCpf, pet.getId, quantidadeAleatoria(), undefined, servico.getId));
                }
            }
        }
    }


    console.log("✅ Cadastro rápido de clientes, pets, produtos, serviços e consumos concluído!");
}
