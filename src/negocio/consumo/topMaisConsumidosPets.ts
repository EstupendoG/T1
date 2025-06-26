import Listagem from "../listagem";
import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Consumo from "../../modelo/consumo";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";

export default class TopMaisConsumidosPets extends Listagem{
    private empresa : Empresa
    private clientes: Array<Cliente>
    private consumos: Array<Consumo>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.empresa  = empresa
        this.clientes = empresa.getClientes
        this.consumos = empresa.getConsumos
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    public listar(): void {
        
        if(this.consumos.length === 0){
            console.log("\n❌ Não há consumos a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        let execucao = true
        while (execucao) {
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Listar por tipo de pet`);
            console.log(`2 - Listar por raça de pet`);
            console.log(`0 - Retornar`);
            console.log('')

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`✎  Por favor, escolha uma opção: `)

            switch (opcao) {
                // TIPO
                case 1:
                    // Pegando todos os tipos
                    let tipos: string[] = []
                    this.clientes.forEach((c) =>{
                        for(let pet of c.getPets){
                            let tipo = pet.getTipo
                            if(!tipos.includes(tipo)){
                                tipos.push(tipo)
                            }
                        }
                    })
                    // Para cada tipo:
                    tipos.forEach((tipo) => {
                        const petsDesseTipo = this.clientes.flatMap((cliente) => 
                            cliente.getPets
                            .filter(pet => pet.getTipo === tipo) 
                            .map(pet => pet.getId)               
                        )
                        console.log(`\n🐱 Tipo: ${tipo}`)
                        console.log(`--------------------------------------`);
                        // Produtos
                        console.log(`📋 Lista dos produtos mais consumidos pelos pets ${tipo}: `)
                        this.listarMaisConsumidos(petsDesseTipo , 'produto')
                        // Serviços
                        console.log(`📋 Lista dos serviços mais consumidos pelos pets ${tipo}: `)
                        this.listarMaisConsumidos(petsDesseTipo , 'servico')
                    })  
                    execucao = false
                    break;


                // RAÇA
                case 2:
                    // Pegando todas as raças
                    let racas: string[] = []
                    this.clientes.forEach((c) =>{
                        for(let pet of c.getPets){
                            let raca = pet.getRaca
                            if(!racas.includes(raca)){
                                racas.push(raca)
                            }
                        }
                    })
                    // Para cada raça:
                    racas.forEach((raca) => {
                        const petsDessaRaca = this.clientes.flatMap((cliente) => 
                            cliente.getPets
                            .filter(pet => pet.getRaca === raca) 
                            .map(pet => pet.getId)               
                        )
                        console.log(`\n🐱 Raça: ${raca}`)
                        console.log(`--------------------------------------`);
                        // Produtos
                        console.log(`📋 Lista dos produtos mais consumidos pela raça ${raca}: `)
                        this.listarMaisConsumidos(petsDessaRaca , 'produto')
                        // Serviços
                        console.log(`📋 Lista dos serviços mais consumidos pela raça ${raca}: `)
                        this.listarMaisConsumidos(petsDessaRaca , 'servico')
                    })  


                    execucao = false
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

    public listarMaisConsumidos(petIds:number[] , tipo:'produto'|'servico'){
        const consumidos = this.consumos.filter((consumo) =>
            petIds.includes(consumo.getPet) && (
                tipo === 'produto' 
                ? consumo.getProduto !== undefined 
                : consumo.getServico !== undefined
            ))
            
            const consumidosIds: { [id: number]: number} = {}
            for(let consumo of consumidos){
                let id = tipo === 'produto' ? consumo.getProduto : consumo.getServico
                if(!consumidosIds[id!]){
                    consumidosIds[id!] = 0
                }
                consumidosIds[id!] += consumo.getQuantidade
            }

            let rank = Object.entries(consumidosIds)
                .sort((a,b) => b[1] - a[1])
    
            for (let [id, total] of rank) {
                const item = (
                    tipo === 'produto'
                    ? this.produtos.find((p) => p.getId === Number(id)) 
                    : this.servicos.find((s) => s.getId === Number(id)) 
                )

                if(item) {
                    console.log(`${tipo === 'produto' ? '📦 Produto' : '🛠️  Serviço'}: ${item.getNome}`);
                    console.log(`${tipo === 'produto' ? '📦' : '🛠️ '} ID: ${item.getId}`);
                    console.log(`${tipo === 'produto' ? '📦' : '🛠️ '} Total consumido: ${total}`);
                    console.log(``);
                }
                else{     
                    console.log("❌ Nenhum cadastro encontrado aqui!")
                    console.log("⏳ Retornando...")
                }
            }
        
    }

}