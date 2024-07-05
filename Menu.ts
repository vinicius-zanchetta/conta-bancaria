import * as leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupanca"];

    const contas: ContaController = new ContaController();

    // // Novas instâncias da classe Conta Corrente
    // const cc1: ContaCorrente = new ContaCorrente(1, 1, 1, "Vinicius", 1000, 500);
    // const cc2: ContaCorrente = new ContaCorrente(2, 1, 1, "Vinicius", 10, 100);
    // cc1.sacar(1500);
    // cc1.depositar(90.5);
    // cc1.sacar(1500);
    // cc1.visualizar();
    // // cc2.visualizar();

    // // Novas instâncias da classe Conta Poupança
    // const cc3: ContaPoupanca = new ContaPoupanca(3, 2, 2, "Isabela", 1000, 9);
    // const cc4: ContaPoupanca = new ContaPoupanca(4, 2, 2, "Rafael", 1000, 25);
    // cc3.visualizar();
    // // cc4.visualizar();

    console.log(colors.bg.black, colors.fg.yellow);
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
    console.log("\t9 - Sair\n")
    console.log("****************************************************")
    
    while (true) {
        opcao = leia.questionInt("Entre com a opcao desejada: ")
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong);
                // console.log("Digite o Número da Conta: ");
                // numero = leia.questionInt();

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

                keyPress();
                break;
            case 5:

                keyPress();
                break;
            case 6:

                keyPress();
                break;
            case 7:

                keyPress();
                break;
            case 8:

                keyPress();
                break;
            case 9:
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