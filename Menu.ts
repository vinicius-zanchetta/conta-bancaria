import * as leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupanca"];

    const contas: ContaController = new ContaController();

    // // Novas instâncias da classe Conta Corrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1, 1, "Vinicius", 1000, 500));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 2, 2, "Isabela", 1000, 9));

    console.log(colors.bg.black, colors.fg.whitestrong);
    console.log("*****************************************************")
    console.log("")
    console.log("\t\tBANCO DO BRAZIL COM Z")
    console.log("\n*****************************************************\n")
    console.log("\t1 - Criar Conta")
    console.log("\t2 - Listar Todas as Contas")
    console.log("\t3 - Buscar Conta por Número")
    console.log("\t4 - Atualizar Dados da Conta")
    console.log("\t5 - Apagar Conta")
    console.log("\t6 - Sacar")
    console.log("\t7 - Depositar")
    console.log("\t8 - Transferir valores entre contas")
    console.log("\t9 - Buscar por titular")
    console.log("\t10 - Sair\n")
    console.log("****************************************************")

    while (true) {
        opcao = leia.questionInt("Entre com a opcao desejada: ")
        switch (opcao) {
            case 1:
                console.log("Digite o Número da Agência: ");
                agencia = leia.questionInt();

                console.log("Digite o Nome do Titular da Conta: ");
                titular = leia.question();

                console.log("Digite o Tipo da Conta: ");
                tipo = leia.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta: ");
                saldo = leia.questionFloat();

                if (tipo == 1) {
                    console.log("Digite o Limite da Conta:");
                    limite = leia.questionFloat();
                    let conta: Conta = new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                    contas.cadastrar(conta);

                } else {
                    console.log("Digite a Data de Aniversário da Conta:");
                    aniversario = leia.questionInt();
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                }
                break;
            case 2:
                contas.listarTodas();
                break;
            case 3:
                numero = leia.questionInt("Digite o numero da conta que voce procura: ");
                contas.procurarPorNumero(numero);
                break;
            case 4:
                console.log("Digite o Número da Conta a ser atualizada: ");
                numero = leia.questionInt();

                let conta = contas.buscarNoArray(numero);

                if (conta == null) {
                    console.log(`Conta de número ${numero} não foi encontrada.`);
                    return;
                }

                console.log("Digite o Número da Agência a ser atualizada: ");
                agencia = leia.questionInt();

                console.log("Digite o Nome do Titular da Conta a ser atualizada: ");
                titular = leia.question();

                console.log("Digite o Saldo da Conta: ");
                saldo = leia.questionFloat();

                if (conta.tipo == 1) {
                    console.log("Digite o Limite da Conta a ser atualizada: ");
                    limite = leia.questionFloat();
                    contas.atualizar(new ContaCorrente(numero, agencia, conta.tipo, titular, saldo, limite));
                } else {
                    console.log("Digite a Data de Aniversário da Conta a ser atualizada: ");
                    aniversario = leia.questionInt();
                    contas.atualizar(new ContaPoupanca(numero, agencia, conta.tipo, titular, saldo, aniversario));
                }
                break;
            case 5:
                numero = leia.questionInt("Digite o numero da conta que voce deseja excluir: ");
                contas.deletar(numero);
                break;
            case 6:
                numero = leia.questionInt("Digite o numero da conta: ");
                valor = leia.questionFloat("Digite o valor que deseja sacar: ");
                contas.sacar(numero, valor);
                break;
            case 7:
                numero = leia.questionInt("Digite o numero da conta: ");
                valor = leia.questionFloat("Digite o valor que deseja depositar: ");
                contas.depositar(numero, valor);
                break;
            case 8:
                numero = leia.questionInt("Digite o numero da Conta de Origem: ");
                numeroDestino = leia.questionInt("Digite o numero da Conta de Destino: ");
                valor = leia.questionFloat("Digite o valor que sera transferido: ");
                contas.transferir(numero, numeroDestino, valor);
                break;
            case 9:
                titular = leia.question("Digite o nome do titular buscado: ")
                contas.procurarPorTitular(titular);
                break;
            case 10:
                console.log(colors.reset, "");
                process.exit(0);
        }
    }
}

export function sobre(): void {
    console.log("\n***********************************************");
    console.log("Desenvolvido por Vinicius Zanchetta");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/vinicius-zanchetta/conta-bancaria/");
    console.log("***********************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}


main();