import Entrada from "../../io/entrada";
import Atualizacao from "../atualizacao";
import Servico from "../../modelo/servico";

export default class AtualizacaoServico extends Atualizacao{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n🔄 Atualização de Serviço:`);
        console.log(`--------------------------------------`);  
        
        if(this.servicos.length === 0){
            console.log("\n❌ Não há serviços a serem atualizados!")
            console.log("⏳ Retornando...")
            return
        }

        let servico: Servico | undefined

        let id = this.entrada.receberNumero("✎  Por favor informe o id do serviço a ser atualizado: ")
        let listaIds = this.servicos.map((x) => x.getId)

        if(!listaIds.includes(id)){
            console.log("❌ Nenhum serviço foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }

        for(let x of this.servicos){
            x.getId === id && (servico = x)
        }
                
        let nome = this.entrada.receberTexto('✎  Informe o novo nome do serviço: ')
        
        console.log(`⏳ Atualizando serviço... ${id}`)
        servico?.setNome(nome)

        console.log(`✅ Serviço ${id} atualizado!`)
    }


}
