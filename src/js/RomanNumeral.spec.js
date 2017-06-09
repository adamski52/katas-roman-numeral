describe("Roman Numerals", function() {
    it("should return 0 if no input is provided", function() {
        expect(new RomanNumeral("").toArabic()).toEqual(0);
    });

    it('should return 1000 for M', function() {
        expect(new RomanNumeral("M").toArabic()).toEqual(1000);
    });

    it('should return 100 for C', function() {
        expect(new RomanNumeral("C").toArabic()).toEqual(100);
    });

    it('should return 50 for L', function() {
        expect(new RomanNumeral("L").toArabic()).toEqual(50);
    });

    it('should return 10 for X', function() {
        expect(new RomanNumeral("X").toArabic()).toEqual(10);
    });

    it('should return 5 for V', function() {
        expect(new RomanNumeral("V").toArabic()).toEqual(5);
    });

    it('should return 1 for I', function() {
        expect(new RomanNumeral("I").toArabic()).toEqual(1);
    });

    it('should return 4 for IV', function() {
        expect(new RomanNumeral("IV").toArabic()).toEqual(4);
    });

    it('should return 9 for IX', function() {
        expect(new RomanNumeral("IX").toArabic()).toEqual(9);
    });

    it('should return 1001 for MI', function() {
        expect(new RomanNumeral("MI").toArabic()).toEqual(1001);
    });
});
