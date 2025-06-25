import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Atualizacao from "../atualizacao";

export default class AtualizacaoPet extends Atualizacao{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes:Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        // Pega todos os pets cadastrados
        let pets: Pet[] = []
        this.clientes.forEach((cliente) => {
            pets.push(...cliente.getPets)
        })

        console.log(`\n🔄 Atualização de Pet:`);
        console.log(`--------------------------------------`);  
        
        if(pets.length === 0){
            console.log("❌ Não há pets a serem atualizados!")
            console.log("⏳ Retornando...")
            return
        }

        let id = this.entrada.receberNumero("✎ Por favor informe o id do pet a ser atualizado: ")
        let listaIds = pets.map((x) => x.getId)
        
        if(!listaIds.includes(id)){
            console.log("❌ Nenhum pet foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }
        
        console.log('\nℹ️ Deixe o campo vazio caso você não queira atualizar seu valor!')
        this.clientes.forEach((cliente) => {
            cliente.getPets.forEach((pet) => {
                if(pet.getId === id){
                    let nome = this.entrada.receberTexto('✎  Informe o novo nome do pet: ')
                    let tipo = this.entrada.receberTexto('✎  Informe o novo tipo do pet: ')
                    let raca = this.entrada.receberTexto('✎  Informe a nova raça do pet: ')
                    let genero = this.entrada.receberTexto('✎  Informe o novo gênero do pet: ')
                    
                    console.log(`⏳ Atualizando produto...`)

                    cliente.atualizarPet(pet , nome , tipo , raca , genero)
                }
            })
        })

        console.log(`✅ Produto ${id} atualizado!`)
    }


}
