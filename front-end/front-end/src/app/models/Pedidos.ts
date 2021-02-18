import { Usuarios } from './Usuarios';
import { Produtos } from "./Produtos"


export class Pedidos{
    public id: number
    public status: string
    public total: number
    public metodo: string
    public data: Date
    public usuarios: Usuarios
    public produto: Produtos[]
    
}