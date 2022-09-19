import Dollar from "./money";

describe("First book chapter", function () {
    it("Should test the multiplication", function () {
        const dollar = new Dollar(5).times(2);
        expect(dollar.amount).toBe(10);
    })

    it("Should test the equality", function () {
        const areEqual = new Dollar(5).equals(new Dollar(5));
        expect(areEqual).toBe(true);
        // TRIANGULATION
        const areNotEqual = new Dollar(5).equals(new Dollar(6));
        expect(areNotEqual).toBe(false);
    })
});