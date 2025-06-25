import Entrada from "../../io/entrada";
import Atualizacao from "../atualizacao";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class AtualizacaoCliente extends Atualizacao{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n🔄 Atualização de Cliente:`);
        console.log(`--------------------------------------`);  
        
        if(this.clientes.length === 0){
            console.log("\n❌ Não há clientes a serem atualizados!")
            console.log("⏳ Retornando...")
            return
        }

        let cliente: Cliente | undefined

        let cpf = this.entrada.receberTexto("✎  Por favor informe o CPF do cliente a ser atualizado: ")
        let listaCpfs = this.clientes.map((x) => x.getCpf.getValor)

        if(!listaCpfs.includes(cpf)){
            console.log("❌ Nenhum cliente foi atribuído a esse CPF")
            console.log("⏳ Retornando...")
            return
        }

        for(let x of this.clientes){
            x.getCpf.getValor === cpf && (cliente = x)
        }
                
        console.log('\nℹ️ Deixe o campo vazio caso você não queira atualizar seu valor!')
        let nome = this.entrada.receberTexto('✎  Informe o novo nome do cliente: ')
        let nomeSocial = this.entrada.receberTexto('✎  Informe o novo nome social do cliente: ')

        let cpfValor = this.entrada.receberTexto('✎  Informe o novo valor do CPF do cliente: ')
        let cpfData = this.entrada.receberData('✎  Informe a nova data de emissão do CPF do cliente: ')
        
        let execucao = true
        while(execucao){
            console.log(`\n🎫 Atualização de RGS`);
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Adicionar RG`);
            console.log(`2 - Remover RG`);
            console.log(`0 - Prosseguir`);

            let opcao = this.entrada.receberNumero('✎  Por favor, escolha uma opção: ')

            switch (opcao) {
                case 1:
                    let valorRg = this.entrada.receberTexto('✎ Informe o número do rg: ')
                    let dataRg = this.entrada.receberData(`✎ Informe a data de emissão do rg, no padrão dd/mm/yyyy: `);

                    if(!dataRg){
                        return
                    }
                    
                    let rg = new RG(valorRg , dataRg)
                    cliente!.getRgs.push(rg)
                    break;

                case 2: 
                    if (cliente!.getRgs.length === 0) {
                        console.log('⚠️ Cliente não possui RGs para remover.');
                    } 
                    else {
                        console.log('\n🎫 RGs do cliente:');
                        cliente!.getRgs.forEach((rg, index) => {
                            console.log(`${index + 1} - ${rg.getValor} - Emitido em ${rg.getDataEmissao}`);
                        });
                        
                        let indice = this.entrada.receberNumero('✎ Informe o índice do RG que deseja remover: ');

                        if (indice >= 1 && indice <= cliente!.getRgs.length) {
                            cliente!.getRgs.splice(indice - 1, 1);
                            console.log('\n✅ RG removido.');
                        } 
                        else {
                            console.log('\n❌ Índice inválido.');
                        }
                    }
                    break;

                case 0:
                    execucao = false
                    console.log(`⏳ Prosseguindo...`)
                    break;

                default:
                    console.log(`⚠️ Operação não entendida :( \n`)
            }
        }
        
        execucao = true
        while(execucao){
            console.log(`\n📞 Atualização de Telefones`);
            console.log(`☰ Opções:`);
            console.log(`--------------------------------------`);
            console.log(`1 - Adicionar Telefone`);
            console.log(`2 - Remover Telefone`);
            console.log(`0 - Prosseguir`);

            let opcao = this.entrada.receberNumero('✎  Por favor, escolha uma opção: ')

            switch (opcao) {
                case 1:
                    let dddTel = this.entrada.receberTexto('✎ Informe o DDD do telefone: ')
                    let numeroTel = this.entrada.receberTexto(`✎ Informe o número do telefone: `);
                    
                    let tel = new Telefone(dddTel , numeroTel)
                    cliente!.getTelefones.push(tel)
                    break;

                case 2: 
                    if (cliente!.getTelefones.length === 0) {
                        console.log('⚠️ Cliente não possui telefones para remover.');
                    } 
                    else {
                        console.log('\n📞 RGs do cliente:');
                        cliente!.getTelefones.forEach((tel, index) => {
                            console.log(`${index + 1} - (${tel.getDdd}) ${tel.getNumero}`);
                        });
                        
                        let indice = this.entrada.receberNumero('✎ Informe o índice do telefone que deseja remover: ');

                        if (indice >= 1 && indice <= cliente!.getTelefones.length) {
                            cliente!.getTelefones.splice(indice - 1, 1);
                            console.log('\n✅ Telefone removido.');
                        } 
                        else {
                            console.log('\n❌ Índice inválido.');
                        }
                    }
                    break;

                case 0:
                    execucao = false
                    console.log(`⏳ Prosseguindo...`)
                    break;

                default:
                    console.log(`⚠️ Operação não entendida :( \n`)
            }
        }
        
        
        console.log('')
        console.log(`⏳ Atualizando cliente...`)

        if(cliente){
            nome && (cliente.setNome = nome)
            nomeSocial && (cliente.setNomeSocial = nomeSocial)
            cpfValor && (cliente.getCpf.setValor = cpfValor)
            cpfData && (cliente.getCpf.setDataEmissao = cpfData)
        }

        console.log(`✅ Cliente ${cpf} atualizado!`)
    }
}
