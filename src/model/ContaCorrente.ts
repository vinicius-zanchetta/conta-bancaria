import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`);
        console.log("****************************************************")
    }

    public sacar(valor: number): boolean {
        if ((this.saldo + this.limite) >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }

    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }
}