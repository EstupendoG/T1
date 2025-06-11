import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\n📋 Lista de todos os serviços:`);
        
        console.log(`--------------------------------------`);  
        this.servicos.forEach(servico => {
            console.log(`🛠️ ID: ${servico.getId}`)
            console.log(`🛠️ Nome: ${servico.getNome}`)
            console.log(`--------------------------------------`);
        });
    }

}