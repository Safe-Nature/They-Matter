import { Usuarios } from './Usuarios';
import { Produtos } from "./Produtos"


export class Pedidos{
    public id: number
    public status: string
    public total: number
    public usuarios: Usuarios
    public produto: Produtos[]
    
}