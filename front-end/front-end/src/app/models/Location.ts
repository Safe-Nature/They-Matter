import { Usuarios } from 'src/app/models/Usuarios';


export class Location {
	id: number;
	nome: string;
	numero: number;
	referencia: string;
	cep: string;
	cidade: string;
	uf: string;
	usuarios: Usuarios;
}