import {TipoConta} from "./tipoconta.enum";
import {Conta} from "./conta";

export interface IConta {
    id: string;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(valor: number, contaDestino: Conta): boolean;
    tipo: TipoConta;
}
