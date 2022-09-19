import Dollar from "./dollar";
import Franc from "./franc";

describe("The Money Example", function () {
    it("Should test the DOLLAR multiplication", function () {
        const five = new Dollar(5);
        expect(new Dollar(10)).toEqual(five.times(2));
    });

    it("Should test the DOLLAR equality", function () {
        const areEqual = new Dollar(5).equals(new Dollar(5));
        expect(areEqual).toBe(true);
        // TRIANGULATION
        const areNotEqual = new Dollar(5).equals(new Dollar(6));
        expect(areNotEqual).toBe(false);
    });

    it("Should test the FRANC multiplication", function () {
        const five = new Franc(5);
        expect(new Franc(10)).toEqual(five.times(2));
        expect(new Franc(15)).toEqual(five.times(3));
    });
});