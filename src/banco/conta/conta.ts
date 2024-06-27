import {IConta} from "./conta.interface";
import { v4 as uuidv4 } from 'uuid';
import {TipoConta} from "./tipoconta.enum";

export  class Conta implements IConta {
    id: string;
    tipo: TipoConta;
    saldo: number;

    constructor(tipo: TipoConta) {
        this.id = uuidv4();
        this.tipo = tipo;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): boolean {
        if (this.tipo === TipoConta.Poupanca) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                return true;
            }
            return false;
        } else if (this.tipo === TipoConta.Corrente) {
            const limiteChequeEspecial = 100;
            if (valor <= this.saldo + limiteChequeEspecial) {
                this.saldo -= valor;
                return true;
            }
            return false;
        }
        return false;
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
