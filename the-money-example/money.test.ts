import Dollar from "./money";

describe("First book chapter", function () {
    it("Should test the multiplication", function () {
        const dollar = new Dollar(5).times(2);
        expect(dollar.amount).toBe(10);
    })
});