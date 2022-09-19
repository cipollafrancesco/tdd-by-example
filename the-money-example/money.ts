class Dollar {
    private readonly _amount: number;

    constructor(number: number) {
        this._amount = number;
    }

    times(multiplier: number) {
        return new Dollar(this._amount * multiplier);
    }


    get amount(): number {
        return this._amount;
    }
}

export default Dollar;