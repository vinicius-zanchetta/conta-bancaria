export abstract class Conta {
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    public sacar(valor: number): boolean {
        console.log(`Titular: ${this._titular} - Operação Selecionada: Sacar R$${valor.toFixed(2)}`);
        if (this._saldo < valor) {
            console.log(`Saldo Insuficiente! Saldo Atual: R$${this._saldo.toFixed(2)}\n`);
            return false;
        }
        this._saldo = this._saldo - valor;
        console.log(`Saque de R$${valor.toFixed(2)}`);
        console.log(`Saldo da Conta Atual: R$${this._saldo.toFixed(2)}\n`);
        return true;
    }

    
    public depositar(valor: number): void {
        console.log(`Titular: ${this._titular} - Operação Selecionada: Depositar R$${valor.toFixed(2)}`);
        this._saldo = this._saldo + valor;
        console.log(`Saldo da Conta Atual: R$${this._saldo.toFixed(2)}\n`);
    }

    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        console.log("\n*****************************************************");
        console.log("Operação Selecionada: Visualizar Dados da Conta:");
        console.log("*****************************************************");
        console.log("Titular: " + this._titular);
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Saldo: " + this._saldo.toFixed(2));
        // console.log("*****************************************************\n");
    }

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero(): number {
        return this._numero;
    }
    
    public set numero(value: number) {
        this._numero = value;
    }
    
    public get agencia(): number {
        return this._agencia;
    }
    
    public set agencia(value: number) {
        this._agencia = value;
    }
    
    public get tipo(): number {
        return this._tipo;
    }
    
    public set tipo(value: number) {
        this._tipo = value;
    }
    
    public get titular(): string {
        return this._titular;
    }
    
    public set titular(value: string) {
        this._titular = value;
    }
    
    public get saldo(): number {
        return this._saldo;
    }
    
    public set saldo(value: number) {
        this._saldo = value;
    }
}