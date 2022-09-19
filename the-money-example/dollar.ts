import Money from "./money";

class Dollar extends Money {

    constructor(number: number) {
        super(number);
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}

export default Dollar;
