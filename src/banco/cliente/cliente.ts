import {IClient} from "./cliente.interface";
import { v4 as uuidv4 } from 'uuid';

export class Cliente implements IClient{
    id: String;
    numeroIdentificacao: string;
    nome: String;
    endereco: String;
    numeroTelefone: string;
    renda: number;

    constructor(nome: string, numeroIdentificacao: string, endereco: String,numeroTelefone: string,renda:number){
        this.id = uuidv4();
        this.numeroIdentificacao = numeroIdentificacao;
        this.nome = nome;
        this.endereco = endereco;
        this.numeroTelefone = numeroTelefone;
        this.renda = renda;
    }





}
