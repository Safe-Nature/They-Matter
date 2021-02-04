import { Usuario } from './Usuario';
import { Produtos } from "./Produtos"


export class Pedidos{
    public id: number
    public status: boolean
    public total: number
    public usuario: Usuario
    public produto: Produtos[]
}