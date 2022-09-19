class Franc {
    private readonly _amount: number;

    constructor(number: number) {
        this._amount = number;
    }

    times(multiplier: number) {
        return new Franc(this._amount * multiplier);
    }


    get amount(): number {
        return this._amount;
    }

    equals(dollar: Franc) {
        return this._amount === dollar._amount;
    }
}

export default Franc;
