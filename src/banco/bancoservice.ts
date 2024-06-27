import {Cliente} from "./cliente/cliente";
import {Conta} from "./conta/conta";
import {TipoConta} from "./conta/tipoconta.enum";


export class BancoService {
    private clientes: Cliente[] = [];

    criarCliente(nomeCompleto: string, numeroIdentificacao: string, endereco: string, numeroTelefone: string, rendaSalarial: number): Cliente {
        const cliente = new Cliente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone, rendaSalarial);
        this.clientes.push(cliente);
        return cliente;
    }

    criarConta(cliente: Cliente): Conta{
        if (cliente.renda >= 500) {
            return new Conta(TipoConta.Corrente);
        } else {
            return new Conta(TipoConta.Poupanca);
        }
    }

}
