"use strict";
const value = 6;
function isPar(v) {
    // if(v % 2 === 0){
    //     return true
    // }else{
    //     return false
    // }
    const res = v % 2 === 0 ? true : false;
    return res;
}
console.log(isPar(value));
const newProduct = {
    id: 2,
    username: "Dany"
};
console.log(newProduct);
const value2 = 111;
const result = value2 === 0 ? "cero" : value2 % 2 === 0 ? "par" : "impar";
switch (result) {
    case "cero":
        console.log("El numero ingresado es cero");
        break;
    case "par":
        console.log("El numero es par");
        break;
    case "impar":
        console.log("Es impar");
        break;
}
;
const names = ["Dani", "Juan", "Andres", "Alejandro"];
const greetingName = names.map(name => "Hola soy " + name);
greetingName.forEach(gName => console.log(gName));
const num = [5, 10, 30, 50];
const sumNum = num.reduce((a, n) => a + n, 0);
console.log(sumNum);
const concatString = (array) => {
    return array.join(" ");
};
const cadena = ["Hola", "Desde", "Aqui"];
console.log(concatString(cadena).toLowerCase());
const daniela = {
    id: 1,
    name: "Daniela"
};
const checho = {
    id: 2,
    name: "Checho"
};
const carlos = {
    id: 3,
    name: "Carlos"
};
const angela = {
    id: 4,
    name: "Angela"
};
const arrayObject = [daniela, checho, carlos, angela];
arrayObject.forEach(obj => console.log(obj.name));
const mayorValor = (array) => {
    return array.reduce((a, s) => a > s ? a = a : a = s, 0);
};
const arrayNumeros = [1, 5, 8, 10, 50];
console.log(mayorValor(arrayNumeros));
const girarMatriz = (matrix) => {
    const long = matrix.length;
    console.log("medida", long);
    const matrixRotated = [];
    for (let i = 0; i < long; i++) {
        matrixRotated[i] = [];
        for (let j = 0; j < long; j++) {
            matrixRotated[i][j] = matrix[long - j - 1][i];
        }
    }
    return matrixRotated;
};
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(girarMatriz(matriz));
const newCar = {
    marca: "mazda",
    modelo: "cx-5",
    anio: 2020
};
const valuesNewCar = Object.values(newCar);
valuesNewCar.forEach(v => console.log(v));
class UtilityCar {
}
UtilityCar.returnString = (obj) => {
    const values = Object.values(obj);
    const stringValues = values.join(" ");
    return stringValues;
};
;
console.log(UtilityCar.returnString(newCar));
const returnNewObject = (obj) => {
    const newObj = Object.assign({}, obj);
    newObj.anio = obj.anio + 1;
    return newObj;
};
console.log(returnNewObject(newCar));
const restParameters = (...args) => {
    const typeOfFirst = typeof args[0];
    const typeOfSecond = typeof args[1];
    if (typeOfFirst !== typeOfSecond) {
        throw new Error("Los dos primeros tipos de datos no coinciden");
    }
    ;
    args.forEach(arg => {
        let validateType = typeof arg;
        if (validateType !== typeOfFirst) {
            throw new Error("Los otros parametros no coinciden con el tipo de  datos de los dos primeros");
        }
    });
    return "Los tipos de datos coinciden";
};
console.log(restParameters(1, "2", 3, 4, 6, 7, 8, 10));
