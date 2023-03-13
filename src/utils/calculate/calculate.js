import Decimal from "decimal.js";

export function calculate(number1, number2, operator) {
    number1 = new Decimal(parseFloat(number1.replace(",", ".")));
    number2 = new Decimal(parseFloat(number2.replace(",", ".")));
    let ansver;

    switch (operator) {
        case "+":
            ansver = number1.plus(number2);
            break;
        case "-":
            ansver = number1.minus(number2);
            break;
        case "*":
            ansver = number1.times(number2);
            break;
        case "/":
            if (String(number2) === "0") {
                ansver = "Не определено"
            } else {
                ansver = number1.dividedBy(number2);
            }
            break;

        default:
            ansver = 0
            break;
    }

    ansver = formatNumber(ansver, 16)

    return ansver
}

function formatNumber(number, maxLength) {
    const strNumber = String(number);
    const numberLength = strNumber.length;
    if (numberLength <= maxLength) {
        return strNumber.replace(".", ",")
    } else {
        if (strNumber.at(-1) === ".") {
            return String(number.round(maxLength));
        } else if (strNumber.slice(0, maxLength).indexOf(".") !== -1) {
            const dotPosition = strNumber.indexOf(".");
            return String(number.toFixed(maxLength-dotPosition - 1))
        } else {
            if (strNumber > 16) {
                return String(number.toExponential(2))
            } else {
                return String(number.toExponential());
            }
        }
    }
}