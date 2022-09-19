import Dollar from "./dollar";
import Franc from "./franc";

describe("The Money Example", function () {

    it("Should test the DOLLAR multiplication", function () {
        const five = new Dollar(5);
        expect(new Dollar(10)).toEqual(five.times(2));
        expect(new Dollar(15)).toEqual(five.times(3));
    });

    it("Should test the FRANC multiplication", function () {
        const five = new Franc(5);
        expect(new Franc(10)).toEqual(five.times(2));
        expect(new Franc(15)).toEqual(five.times(3));
    });

    it("Should test the equality", function () {
        // DOLLARS
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
        expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
        // FRANCS
        expect(new Franc(5).equals(new Franc(5))).toBe(true);
        expect(new Franc(5).equals(new Franc(6))).toBe(false);
        // DOLLARS AND FRANCS
        const areDollarsAndFrancsEqual = new Dollar(5).equals(new Franc(5));
        expect(areDollarsAndFrancsEqual).toBe(false);
    });
});