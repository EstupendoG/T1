import Cliente from "./cliente"
import Consumo from "./consumo"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private consumos: Array<Consumo>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.consumos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getConsumos(){
        return this.consumos
    }
}