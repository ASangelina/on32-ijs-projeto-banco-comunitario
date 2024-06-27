# on32-ijs-projeto-banco-comunitario
# Sistema Bancário

Este projeto é um sistema bancário simples desenvolvido em TypeScript seguindo a orientação a objetos. Ele permite a criação de clientes e contas bancárias, bem como operações básicas como depósitos, saques e transferências entre contas.

## Funcionalidades

- Criar clientes com informações básicas.
- Criar contas bancárias do tipo Conta Corrente ou Conta Poupança.
    - Contas Corrente têm um limite de cheque especial de R$ 100,00.
    - Contas Poupança aplicam juros ao saldo.
- Realizar operações de depósito, saque e transferência entre contas.
- Regras específicas para cada tipo de conta:
    - Conta Corrente: clientes devem ter uma renda salarial mínima de R$ 500,00.
    - Conta Poupança: disponível para todos os clientes, independentemente da renda salarial.
