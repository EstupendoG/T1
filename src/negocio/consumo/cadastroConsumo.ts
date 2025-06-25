import Cadastro from "../cadastro";
import Empresa from "../../modelo/empresa";
import Cliente from "../../modelo/cliente";
import Consumo from "../../modelo/consumo";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class CadastroConsumo extends Cadastro{
    private empresa : Empresa
    private consumos: Array<Consumo>
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(empresa:Empresa){
        super()
        this.empresa  = empresa
        this.clientes = empresa.getClientes
        this.consumos = empresa.getConsumos
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let pets: Pet[] = []
        this.clientes.forEach((cliente) => {
            pets.push(...cliente.getPets)
        })

        console.log(`\n📝 Início do cadastro de consumo de pets`);

        if(pets.length === 0){
            console.log("❌ Não há pets cadastrados!")
            console.log("⏳ Retornando...")
            return
        }

        let execucao = true
        while(execucao){
            let tipoConsumo = ''
            console.log(`Escolha o consumo você deseja cadastrar: `);
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Consumo de Produto`);
            console.log(`2 - Consumo de Serviço`);
            console.log(`0 - Retornar`);
            
            let opcao = this.entrada.receberNumero('✎  Por favor, escolha uma opção: ')
            switch(opcao){
                case 1:
                    execucao = false
                    tipoConsumo = 'produto'
                    break
                case 2:
                    execucao = false
                    tipoConsumo = 'serviço'
                    break
                case 0:
                    execucao = false
                    console.log(`⏳ Retornando...`)
                    break;
                default:
                    console.log(`⚠️ Operação não entendida :( \n`)
            }

            // PRODUTO / SERVIÇO
            let idConsumo = this.entrada.receberNumero(`✎  Por favor informe o id do ${tipoConsumo} que foi consumido: `)

            let itemConsumido: Produto | Servico | undefined
            if (tipoConsumo === 'produto'){
                itemConsumido = this.produtos.find((x) => x.getId === idConsumo)
            }
            else
            if (tipoConsumo === 'serviço'){
                itemConsumido = this.servicos.find((x) => x.getId === idConsumo)
            }
            
            if(!itemConsumido){
                console.log(`❌ Nenhum ${tipoConsumo} foi atribuído a esse ID`)
                console.log("⏳ Retornando...")
                break
            }


            // PET
            let idPet = this.entrada.receberNumero(`✎  Por favor informe o id do pet que consumiu o ${tipoConsumo}: `)
            let pet: Pet | undefined
            let dono: Cliente | undefined

            for(let cliente of this.clientes){
                pet = cliente.getPets.find((pet) => pet.getId === idPet)
                if(pet){
                    dono = cliente
                    break
                }
            }

            if(!pet || !dono){
                console.log("❌ Nenhum pet foi atribuído a esse ID")
                console.log("⏳ Retornando...")
                break
            }

            // QUANTIDADE
            let quantidade = this.entrada.receberNumero(`✎  Por favor, informe a quantidade de vezes que o pet ${pet.getNome} consumiu o ${tipoConsumo} ${itemConsumido.getNome}: `)
            if(quantidade < 1){
                console.log("❌ A quantidade deve ser superior a 0")
                break
            }

            // CADASTRANDO REGISTRO DE CONSUMO
            // Se o consumo foi de Produto
            if(tipoConsumo === 'produto'){
                // Procura e verifica se esse consumo já foi cadastrado
                let consumoCadastrado = this.consumos.find((consumo) => {
                    return(
                        consumo.getPet === pet.getId &&
                        consumo.getProduto === itemConsumido!.getId
                    )
                })
                // Se sim, apenas soma a quantidade
                if(consumoCadastrado){
                    consumoCadastrado.adicionarQuantidade(quantidade)
                }
                // Se não, cria o novo consumo
                else{
                    let consumo = new Consumo(dono.getCpf , pet.getId , quantidade , itemConsumido.getId , undefined)
                    this.consumos.push(consumo)
                }
            }

            // Se o consumo foi de Serviço
            else if(tipoConsumo === 'serviço'){
                // Procura e verifica se esse consumo já foi cadastrado
                let consumoCadastrado = this.consumos.find((consumo) => {
                    return(
                        consumo.getPet === pet.getId &&
                        consumo.getServico === itemConsumido!.getId
                    )
                })
                // Se sim, apenas soma a quantidade
                if(consumoCadastrado){
                    consumoCadastrado.adicionarQuantidade(quantidade)
                }
                // Se não, cria o novo consumo
                else{
                    let consumo = new Consumo(dono.getCpf , pet.getId , quantidade , undefined , itemConsumido.getId)
                    this.consumos.push(consumo)
                }
            }

            console.log(`\n✅ Cadastro do consumo de ${tipoConsumo} concluído :)\n`);

        }

    }
}