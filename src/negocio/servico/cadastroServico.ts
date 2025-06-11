import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Servico from "../../modelo/servico";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n📝 Cadastro de Serviço`);
        console.log(`--------------------------------------`);  
        let nome = this.entrada.receberTexto('✎  Por favor informe o nome do serviço: ')
        
        let id = 1
        if(this.servicos.length > 0){
            let maiorId = Math.max(...this.servicos.map((x) => x.id))
            id = maiorId + 1
        }

        let servico = new Servico(id,nome)

        this.servicos.push(servico)
        console.log(`\n✅ Cadastro concluído :)`);
    }
}
