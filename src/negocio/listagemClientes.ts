import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            let rgNumber = 0
            cliente.getRgs.forEach(rg => {
                rgNumber++
                console.log(`${rgNumber}º RG: ${rg.getValor}`)
            })

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}