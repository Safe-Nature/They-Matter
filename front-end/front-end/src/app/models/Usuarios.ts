import { Pedidos } from "./Pedidos"
import { Location } from "./Location"

export class Usuarios {
    public id: number
    public nome: string
    public email: string
    public senha: string
    public pedidos: Pedidos[]
    public location: Location[]
}
