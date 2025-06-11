import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\n📋 Listagem dos Serviços:`);
        console.log(`--------------------------------------`);  
        
        if(this.servicos.length === 0){
            console.log("\n❌ Não há serviços a serem listados!")
            console.log("⏳ Retornando...")
            return
        }

        this.servicos.forEach(servico => {
            console.log(`🛠️ ID: ${servico.getId}`)
            console.log(`🛠️ Nome: ${servico.getNome}`)
            console.log(`--------------------------------------`);
        });
    }

}