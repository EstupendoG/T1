import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Remocao from "../remocao";

export default class RemocaoServico extends Remocao{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public remover(): void {
        console.log(`\n📝 Início da remoção de um serviço`);

        if(this.servicos.length === 0){
            console.log("❌ Não há serviços a serem removidos!")
            console.log("⏳ Retornando...")
            return
        }

        let id = this.entrada.receberNumero("✎  Por favor informe o id do serviço a ser removido: ")
        
        let listaIds = this.servicos.map((x) => x.getId)
        if(!listaIds.includes(id)){
            console.log("❌ Nenhum serviço foi atribuído a esse ID")
            console.log("⏳ Retornando...")
            return
        }

        let confirmacao = (this.entrada.receberTexto(`⚠️ Você tem certeza que deseja remover esse serviço? (S/N): `)).toLowerCase()

        while(confirmacao != "s" && confirmacao != "n"){
            console.log("❌ Valor Inválido!")
            confirmacao = (this.entrada.receberTexto("❌ Escolha somente entre S ou N: ")).toLowerCase()
        }

        if(confirmacao == 'n'){
            console.log("\n⏳ Retornando...")
            return
        }

        console.log(`⏳ Removendo serviço... ${id}`)
        for(let servico of this.servicos){
            if(servico.getId === id){
                let i = this.servicos.indexOf(servico)
                this.servicos.splice(i,1)
            }
        }
        
        console.log(`✅ Serviço ${id} removido!`)

    }
}