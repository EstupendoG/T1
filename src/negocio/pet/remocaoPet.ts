import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Remocao from "../remocao";

export default class RemocaoPet extends Remocao{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public remover(): void {
        // Pega todos os pets cadastrados
        let pets: Pet[] = []
        this.clientes.forEach((cliente) => {
            pets.push(...cliente.getPets)
        })

        console.log(`\n🗑️- Remoção de Pet`);
        console.log(`--------------------------------------`);  

        if(pets.length === 0){
            console.log("❌ Não há pets a serem removidos!")
            console.log("⏳ Retornando...")
            return
        }

        let id = this.entrada.receberNumero("✎  Por favor informe o id do pet a ser removido: ")
        
        let listaIds = pets.map((x) => x.getId)
        if(!listaIds.includes(id)){
            console.log("❌ Nenhum pet foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }

        let confirmacao = (this.entrada.receberTexto(`⚠️ Você tem certeza que deseja remover esse pet? (S/N): `)).toLowerCase()

        while(confirmacao != "s" && confirmacao != "n"){
            console.log("❌ Valor Inválido!")
            confirmacao = (this.entrada.receberTexto("❌ Escolha somente entre S ou N: ")).toLowerCase()
        }

        if(confirmacao == 'n'){
            console.log("\n⏳ Retornando...")
            return
        }

        console.log(`\n⏳ Removendo pet...`)
        this.clientes.forEach((cliente) => {
            cliente.getPets.forEach((pet) => {
                if(pet.getId === id){
                    cliente.removerPet(pet)
                }
            })
        })
        
        console.log(`✅ Pet ${id} removido!`)

    }
}