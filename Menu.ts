import * as leia from "readline-sync"
import { colors } from "./src/util/Colors"

export function main() {
    let opcao: number;
    console.log(colors.bg.black, colors.fg.yellow);
    console.log("************************************************")
    console.log(`
        
        \t    BANCO DO BRAZIL COM Z
        
        ************************************************
        
        \t1 - Criar Conta
        \t2 - Listar Todas as Contas
        \t3 - Buscar Conta por Número
        \t4 - Atualizar Dados da Conta
        \t5 - Apagar Conta
        \t6 - Sacar
        \t7 - Depositar
        \t8 - Transferir valores entre contas
        \t9 - Sair
        
        ***********************************************
        `)
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