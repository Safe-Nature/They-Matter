import { Usuarios } from 'src/app/models/Usuarios';


export class Location {
	id: number;
	nome: string;
	cep: string;
	cidade: string;
	uf: string;
	usuario: Usuarios;
}