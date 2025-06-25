import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemPet extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void{
        // Pega todos os pets cadastrados
        let pets: Pet[] = []
        this.clientes.forEach((cliente) => {
            pets.push(...cliente.getPets)
        })

        console.log('\n📋 Lista de todos os pets: ')
        console.log(`--------------------------------------`);
        
        if(pets.length === 0){
            console.log("\n❌ Não há pets a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        this.clientes.forEach(cliente => {
            if(cliente.getPets.length > 0){
                console.log(`👤 Nome do Dono: ${cliente.getNomeSocial}`)
                console.log(`👤 CPF do Dono: ${cliente.getCpf.getValor}`)
                cliente.getPets.forEach((pet) => {
                    console.log(`🐱 ID: ${pet.getId}`)
                    console.log(`🐱 Nome: ${pet.getNome}`)
                    console.log(`🐱 Tipo: ${pet.getTipo}`)
                    console.log(`🐱 Raça: ${pet.getRaca}`)
                    console.log(`🐱 Gênero: ${pet.getGenero}`)
                    console.log(`--------------------------------------`);
                })
            }
        })
    }

}