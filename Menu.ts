import * as leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";

export function main() {
    let opcao: number;
    const conta1: Conta = new Conta(1, 1, 1, "Vinicius", 10);
    const conta2: Conta = new Conta(2, 2, 2, "Pierre", 1000);
    conta1.sacar(100);
    conta1.depositar(90.5);
    conta1.sacar(100);
    conta1.visualizar();
    conta2.visualizar();
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