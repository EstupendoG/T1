import Entrada from "../../io/entrada"
import Cadastro from "../cadastro"
import Pet from "../../modelo/pet"
import Cliente from "../../modelo/cliente"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private pets!: Array<Pet>
    private entrada: Entrada
    constructor(clientes:Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n📝 Cadastro de Pet`);
        console.log(`--------------------------------------`);  

        // Procura o dono do pet
        let cpfDono = this.entrada.receberTexto(`✎  Por favor informe o CPF do dono desse pet: `)

        let dono = this.clientes.find((cliente) => {
            return cliente.getCpf.getValor === cpfDono
        })

        if(!dono){
            console.log("❌ Nenhum cliente foi atribuído a esse CPF")
            return
        }
        
        // Pede informações do pet
        let nome = this.entrada.receberTexto(`✎  Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`✎  Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`✎  Por favor informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`✎  Por favor informe o genero do pet: `)

        // Gera ID do pet
        let pets: Pet[] = []
        this.clientes.forEach((cliente) => {
            pets.push(...cliente.getPets)
        })
        let id = 1
        if(pets.length > 0){
            let maiorId = Math.max(...pets.map((x) => x.getId))
            id = maiorId + 1
        }

        // Adiciona o pet ao cliente
        let pet = new Pet(id , nome , tipo , raca , genero)
        dono.adicionarPet(pet)
        
        console.log(`\n✅ Cadastro concluído :)`);
    }
}