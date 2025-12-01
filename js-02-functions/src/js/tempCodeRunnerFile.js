const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};
const sum = (a, b) => a + b; // Crear una función que sume dos números
console.log(`Realizando una suma: ${calculate(5,3,sum)}`); // Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate(6,3,(a, b) => a % b)}`); 