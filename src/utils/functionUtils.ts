const evaluate = (equation: string, x: number) => {
    // Validate the equation: only allow numbers, x, and mathematical operators (+, -, *, /, ^)
    const allowedCharacters = /^[0-9x+\-*/^().\s]*$/;

    if (!allowedCharacters.test(equation)) {
        throw new Error("Invalid equation. Only the variable 'x' and valid mathematical operators are allowed.");
    }

    // Replace '2x' with '2*x' to handle numbers followed by 'x'
    const adjustedEquation = equation.replace(/(\d+)(x)/g, '$1*$2');

    // Replace 'x' with its numeric value
    const updatedEquation = adjustedEquation.replace(/x/g, x.toString());

    // Replace '^' with '**' for exponentiation
    const finalEquation = updatedEquation.replace(/\^/g, '**');

    try {
        // Using Function constructor to evaluate the final equation
        // eslint-disable-next-line no-new-func
        return new Function('return ' + finalEquation)();
    } catch (error) {
        throw new Error("Invalid equation syntax.");
    }
};


export const applyFunction = (equation: string, x: number) => {
    const resultObj = {
        isValid: true,
        errorMessage: '',
        value: x
    }
    try {
        if (equation) {
            const val = evaluate(equation, x);
            resultObj.value = val;
        }
    } catch (e: any) {
        resultObj.isValid = false;
        resultObj.errorMessage = e.message;
    }
    return resultObj;
};