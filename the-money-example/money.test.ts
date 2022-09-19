import Dollar from "./money";

describe("First book chapter", function () {
    it("Should test the multiplication", function () {
        const five = new Dollar(5);
        expect(new Dollar(10)).toEqual(five.times(2));
    })

    it("Should test the equality", function () {
        const areEqual = new Dollar(5).equals(new Dollar(5));
        expect(areEqual).toBe(true);
        // TRIANGULATION
        const areNotEqual = new Dollar(5).equals(new Dollar(6));
        expect(areNotEqual).toBe(false);
    })
});