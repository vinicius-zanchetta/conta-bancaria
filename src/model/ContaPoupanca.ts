import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    
    private _aniversario: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Aniversário: Dia ${this._aniversario}\n`);
        console.log("****************************************************")
    }


    /**
     * Getter aniversario
     * @return {number}
     */
	public get aniversario(): number {
		return this._aniversario;
	}

    /**
     * Setter aniversario
     * @param {number} value
     */
	public set aniversario(value: number) {
		this._aniversario = value;
	}

}
