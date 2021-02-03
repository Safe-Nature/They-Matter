import { Categoria } from './Categoria';
export class Produtos {
    public id: number
    public nome: string
    public preco: number
    public parcelamento: string
    public estoque: number
    public descricao: string
    public tamanho: string
    public imagem: string 
    public categoria: Categoria
  }