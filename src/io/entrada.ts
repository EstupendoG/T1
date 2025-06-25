import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }
    public receberData(mensagem: string): Date | void{
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let partesData = valor.split('/')
        
        if(partesData.length != 3){
            console.log('\n❌ Formato de data inválido')
            return
        }
        
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        return dataEmissao
    }
}