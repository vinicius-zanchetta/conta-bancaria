import * as leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number;
    
    // Novas instâncias da classe Conta Corrente
    const cc1: ContaCorrente = new ContaCorrente(1, 1, 1, "Vinicius", 1000, 500);
    const cc2: ContaCorrente = new ContaCorrente(2, 1, 1, "Vinicius", 10, 100);
    cc1.sacar(1500);
    cc1.depositar(90.5);
    cc1.sacar(1500);
    cc1.visualizar();
    // cc2.visualizar();

    // Novas instâncias da classe Conta Poupança
    const cc3: ContaPoupanca = new ContaPoupanca(3, 2, 2, "Isabela", 1000, 9);
    const cc4: ContaPoupanca = new ContaPoupanca(4, 2, 2, "Rafael", 1000, 25);
    cc3.visualizar();
    // cc4.visualizar();

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
        opcao = leia.questionInt("Entre com a opcao desejada: ")

        switch(opcao) {
            case 1:
                
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
            case 9:
                console.log(colors.reset, "");
                process.exit(0);
        }
    console.log(colors.reset, "");
}

export function sobre(): void {
    console.log("\n***********************************************");
    console.log("Desenvolvido por Vinicius Zanchetta");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/vinicius-zanchetta/conta-bancaria/");
    console.log("***********************************************");    
}

main();