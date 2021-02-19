import { Location } from './Location';
import { Pedidos } from './Pedidos';
export class UserLogin {
  public id: number
  public nome: string
  public email: string
  public senha: string
  public token: string
  public pedido: Pedidos[]
  public location: Location[]
}
