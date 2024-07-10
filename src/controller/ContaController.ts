import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    listarTodas(): void {
        this.listaContas.forEach(c => c.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta: Conta | null = this.buscarNoArray(numero);
        (buscaConta !== null) ? buscaConta.visualizar() : console.log("A conta não foi encontrada.");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            console.log(`A conta com ID ${conta.numero} foi alterada com sucesso!`);
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
        } else {
            console.log("A conta não foi encontrada!");
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            console.log(`A conta com ID ${numero} foi excluída com sucesso!`);
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
        } else {
            console.log("A conta não foi encontrada!");
        }
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor))
                console.log("O saque foi efetuado com sucesso!");
        } else {
            console.log("A conta não foi encontrada!");
        }
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log("O depósito foi efetuado com sucesso!");
        } else {
            console.log("A conta não foi encontrada!");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino != null) {
            if (buscaContaOrigem.sacar(valor))
                buscaContaDestino.depositar(valor);
            console.log("A transferência foi executada com sucesso!");
        } else if (buscaContaOrigem == null && buscaContaDestino == null) {
            console.log("A conta de origem e a conta de destino não foram encontradas!");
        } else if (buscaContaOrigem == null && buscaContaDestino != null) {
            console.log("A conta de origem não foi encontrada!");
        } else if (buscaContaOrigem != null && buscaContaDestino == null) {
            console.log("A conta de destino não foi encontrada!");
        }
    }

    procurarPorTitular(nome: string): void {
        let buscaPorTitular = this.listaContas.filter(c => c.titular.includes(nome))
        if (buscaPorTitular) {
            buscaPorTitular.forEach(c => c.visualizar());
            return
        }
        console.log("Não foi encontrado ninguém com esse nome!");
        
    }

    // métodos auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}