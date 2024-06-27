import {BancoService} from "./bancoservice";

const bancoService = new BancoService();

// Criar cliente com renda superior a 500 para conta corrente
const cliente1 = bancoService.criarCliente('João Silva', '123456789', 'Rua Exemplo, 123', '999999999', 600);

// Criar cliente com renda até 500 para conta poupança
const cliente2 = bancoService.criarCliente('Maria Oliveira', '987654321', 'Avenida Teste, 456', '888888888', 400);

// Criar conta para o cliente1 (deverá ser conta corrente)
const conta1 = bancoService.criarConta(cliente1);
if (conta1) {
    console.log(`Conta ${conta1.tipo} criada com sucesso para ${cliente1.nome}.`);
}

// Criar conta para o cliente2 (deverá ser conta poupança)
const conta2 = bancoService.criarConta(cliente2);
if (conta2) {
    console.log(`Conta ${conta2.tipo} criada com sucesso para ${cliente2.nome}.`);
}

// Realizar depósito na conta corrente
if (conta1) {
    conta1.depositar(1000);
    console.log(`Saldo após depósito: ${conta1.saldo}`);
}

// Realizar saque na conta corrente
if (conta1 && conta1.sacar(200)) {
    console.log(`Saldo após saque: ${conta1.saldo}`);
}

// Transferir da conta corrente para a poupança
if (conta1 && conta2 && conta1.transferir(300, conta2)) {
    console.log(`Saldo conta corrente após transferência: ${conta1.saldo}`);
    console.log(`Saldo conta poupança após transferência: ${conta2.saldo}`);
}
