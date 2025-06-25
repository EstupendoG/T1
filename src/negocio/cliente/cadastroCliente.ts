import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n📝 Início do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`✎ Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`✎ Por favor informe o nome social do cliente: `)
        
        // Cadastro do CPF
        let valor = this.entrada.receberTexto(`✎ Por favor informe o número do cpf: `);

        let cpfsArray = this.clientes.map((x) => x.getCpf.getValor)
        while(cpfsArray.includes(valor)){
            console.log(`⚠️ Esse cpf já está cadastrado!`)
            valor = this.entrada.receberTexto('⚠️ Informe outro número de cpf: ')
        }

        let data = this.entrada.receberData(`✎ Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        if (!data){
            return
        }
        let cpf = new CPF(valor, data);

        // Cadastro dos RG's
        let rgCount = this.entrada.receberNumero("✎ Por favor, informe quantos RG's você quer cadastrar: ")
        let rgArray = []
        if(rgCount <= 0){
            console.log('⏳ Prosseguindo...')
        }
        else{
            for(let i = 1 ; i <= rgCount ; i++){
                console.log(`\n Cadastro do ${i}º RG`)
                let valor = this.entrada.receberTexto('✎ Informe o número do rg: ')
                let data = this.entrada.receberData(`✎ Informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                if(!data){
                    return
                }
                let rg = new RG(valor, data)

                rgArray.push(rg)
                
            }
        }

        // Cadastro de Telefones
        let phoneCount = this.entrada.receberNumero("\n✎ Por favor, informe quantos Telefones você quer cadastrar: ")
        let phoneArray = []
        if(phoneCount <= 0){
            console.log('⏳ Prosseguindo...')
        }
        else{
            for(let i = 1 ; i <= phoneCount ; i++){
                console.log(`\n Cadastro do ${i}º Telefone`)
                let ddd = this.entrada.receberTexto('✎ DDD: ')
                let numero = this.entrada.receberTexto(`✎ Número: `);
                let telefone = new Telefone(ddd, numero)

                phoneArray.push(telefone)
                
            }
        }
        
        
        let cliente = new Cliente(nome, nomeSocial, cpf, rgArray , phoneArray);
        
        this.clientes.push(cliente)
        console.log(`\n✅ Cadastro concluído :)\n`);
    }
}