import { calculate } from "./calculate";

describe("Calculate test", () => {
    test("1 + 1", () => {
        const number1 = "1";
        const number2 = "1";
        const operator = "+"
        expect(calculate(number1, number2, operator )).toBe("2");
    });
    test("1 - 1", () => {
        const number1 = "1";
        const number2 = "1";
        const operator = "1"
        expect(calculate(number1, number2, operator )).toBe("0");
    });
    test("1 * 1", () => {
        const number1 = "1";
        const number2 = "1";
        const operator = "*"
        expect(calculate(number1, number2, operator )).toBe("1");
    });
    test("1 / 1", () => {
        const number1 = "1";
        const number2 = "1";
        const operator = "/"
        expect(calculate(number1, number2, operator )).toBe("1");
    });
    test("0.1 + 0.1", () => {
        const number1 = "0,1";
        const number2 = "0,1";
        const operator = "+"
        expect(calculate(number1, number2, operator )).toBe("0,2");
    });

    test("0.1 - 0.1", () => {
        const number1 = "0,1";
        const number2 = "0,1";
        const operator = "-"
        expect(calculate(number1, number2, operator )).toBe("0");
    });
    test("0.1 - 0.199", () => {
        const number1 = "0,1";
        const number2 = "0,199";
        const operator = "-"
        expect(calculate(number1, number2, operator )).toBe("-0,099");
    });

    test("-0.1 - 0.1", () => {
        const number1 = "-0,1";
        const number2 = "0,1";
        const operator = "-"
        expect(calculate(number1, number2, operator )).toBe("-0,2");
    });

    test("0.000000001 + 0.000000001", () => {
        const number1 = "0.000000001";
        const number2 = "0.000000001";
        const operator = "+"
        expect(calculate(number1, number2, operator )).toBe("2e-9");
    });

    test("0.1 - 0.1", () => {
        const number1 = "0,1";
        const number2 = "0,1";
        const operator = "-"
        expect(calculate(number1, number2, operator )).toBe("0");
    });

    test("0.2 * (-0.3)", () => {
        const number1 = "0,2";
        const number2 = "-0,3";
        const operator = "*"
        expect(calculate(number1, number2, operator )).toBe("-0,06");
    });

    test("0.2 - 0.3", () => {
        const number1 = "0,2";
        const number2 = "0,3";
        const operator = "-"
        expect(calculate(number1, number2, operator )).toBe("-0,1");
    });

    test("1/3", () => {
        const number1 = "1";
        const number2 = "3";
        const operator = "/"
        expect(calculate(number1, number2, operator)).toBe("0.33333333333333")
    })

    test("last digit is .", () => {
        const number1 = "111111111111111.9";
        const number2 = "1";
        const operator = "+"
        expect(calculate(number1, number2, operator)).toBe("111111111111113")
    })

    test("len digit > 16, dot at 2 place", () => {
        const number1 = "5.555555555555554";
        const number2 = "1";
        const operator = "+"
        expect(calculate(number1, number2, operator)).toBe("6.55555555555555")
    })

    test("len digit > 16, dot at 9 place", () => {
        const number1 = "55555555.55555554";
        const number2 = "1";
        const operator = "+"
        expect(calculate(number1, number2, operator)).toBe("55555556.5555555")
    })

    test("1.01e+16", () => {
        const number1 = "99999999999999.1";
        const number2 = "9999999999999999";
        const operator = "+"
        expect(calculate(number1, number2, operator)).toBe("1.01e+16")
    })

    test("1.00e+16", () => {
        const number1 = "9999999999999999";
        const number2 = "1";
        const operator = "+"
        expect(calculate(number1, number2, operator)).toBe("1.00e+16")
    })

    test("1e+32", () => {
        const number1 = "9999999999999999";
        const number2 = "9999999999999999";
        const operator = "*"
        expect(calculate(number1, number2, operator)).toBe("1e+32")
    })

    test("0 * 0", () => {
        const number1 = "0";
        const number2 = "0";
        const operator = "*"
        expect(calculate(number1, number2, operator)).toBe("0")
    })

    test("1 / 0", () => {
        const number1 = "1";
        const number2 = "0";
        const operator = "/"
        expect(calculate(number1, number2, operator)).toBe("Не определено")
    })

    test("0 / 0", () => {
        const number1 = "0";
        const number2 = "0";
        const operator = "/"
        expect(calculate(number1, number2, operator)).toBe("Не определено")
    })

});