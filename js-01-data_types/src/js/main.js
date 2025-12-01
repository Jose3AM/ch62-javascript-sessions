console.log("Session JS01 - Data Types");

const userName = "Filomeno";
const userAge = 40;
const country = "Mexico";

console.log(`My name is ${userName} \n I am ${userAge} years old and I am from ${country}`);
console.log(typeof (`0.1 + 0.2 = ${0.1 + 0.2}`))

// --- Precisión y Límites ---
// Cuidado: JS usa punto flotante (IEEE 754), lo que causa errores en decimales.
console.log("--- Precisión ---");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004 (Ojo en entrevistas)
console.log("--- Límites ---");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997

console.log(Number("68-58"));
console.log(parseInt("68-58"));
console.log(parseFloat("68-58"));