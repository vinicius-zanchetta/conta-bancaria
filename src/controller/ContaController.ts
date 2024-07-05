import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    // Controlar os números das contas
    public numero: number = 0;

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    listarTodas(): void {
        // for (let conta of this.listaContas) {
        //     conta.visualizar();
        // }
        this.listaContas.forEach(c => c.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta: Conta | null = this.buscarNoArray(numero);

        (buscaConta !== null) ? buscaConta.visualizar() : console.log("A conta não foi encontrada.");
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    // métodos auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                console.log("-----");
                console.log("conta.numero: " + conta.numero);
                console.log("numero: " + numero);

                return conta;
            }
        }
        return null;
    }

}