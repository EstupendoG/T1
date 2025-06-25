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
        
        console.log('\nℹ️ Deixe o campo vazio caso você não queira atualizar seu valor!')
        let nome = this.entrada.receberTexto('✎  Informe o novo nome do serviço: ')
        let valor = this.entrada.receberNumero('✎  Informe o novo preço do serviço: R$')
        
        console.log(`⏳ Atualizando serviço...`)
        nome  && servico?.setNome(nome)
        valor && servico?.setValor(valor)

        console.log(`✅ Serviço ${id} atualizado!`)
    }


}
