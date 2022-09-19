import Money from "./money";

class Franc extends Money {

    constructor(number: number) {
        super(number);
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }
}

export default Franc;
