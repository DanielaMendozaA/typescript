const value: number = 6;

function isPar(v : number): boolean{
    // if(v % 2 === 0){
    //     return true
    // }else{
    //     return false
    // }
    const res = v % 2 === 0 ?  true : false
    return res
}

console.log(isPar(value));

type Product = {
    id: number;
    username: string;
};

const newProduct : Product = {
    id:2,
    username:"Dany"
};

console.log(newProduct);


const value2: number = 111;
const result: string = value2 === 0 ? "cero": value2  % 2 === 0 ? "par" : "impar"
switch(result){
    case "cero":
        console.log("El numero ingresado es cero");
        break;
    case "par":
        console.log("El numero es par");
        break;
    case "impar":
        console.log("Es impar");
        break;
              
};

const names: string[] = ["Dani", "Juan", "Andres", "Alejandro"];
const greetingName: string[] = names.map(name => "Hola soy " + name );
greetingName.forEach(gName => console.log(gName));



const num: number[] = [5, 10, 30, 50];
const sumNum: number = num.reduce((a , n) => a + n, 0)
console.log(sumNum);


const concatString  = (array: string[]) : string => {
    return array.join(" ");
};

const cadena: string[] = ["Hola", "Desde", "Aqui"];
console.log(concatString(cadena).toLowerCase());


type User = {
    id: number,
    name: string
};

const daniela: User = {
    id: 1,
    name: "Daniela"
};

const checho: User = {
    id: 2,
    name: "Checho"
};
const carlos: User = {
    id: 3,
    name: "Carlos"
};
const angela: User = {
    id: 4,
    name: "Angela"
};

const arrayObject: User[] = [daniela, checho, carlos, angela]; 
arrayObject.forEach(obj => console.log(obj.name)
);


const mayorValor = (array: number[]) : number => {
    return array.reduce((a, s) => a > s ? a = a : a = s, 0)
};

const arrayNumeros: number[] = [1, 5, 8, 10, 50];
console.log(mayorValor(arrayNumeros));
 

const girarMatriz =  (matrix: number[][]) : number[][]  => {
    const long: number = matrix.length;
    console.log( "medida",long);
    
    const matrixRotated: number[][] = [];
    
    for(let i = 0; i < long ; i++){
        matrixRotated[i] = [];
        for(let j = 0; j < long; j++){
            matrixRotated[i][j] = matrix[long - j - 1][i];
        }

    }

    return matrixRotated

};


const matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(girarMatriz(matriz));


type Car = {
    marca: string,
    modelo: string,
    anio: number
}


const newCar: Car = {
    marca: "mazda",
    modelo: "cx-5",
    anio: 2020
}

const valuesNewCar = Object.values(newCar);
valuesNewCar.forEach(v => console.log(v));

class UtilityCar {
    static returnString = (obj:Car):string => {
        const values: (string | number)[] = Object.values(obj);
        const stringValues = values.join(" ");
        return stringValues
    };
};

console.log(UtilityCar.returnString(newCar));


const returnNewObject = (obj:Car):Car => {
    const newObj = {...obj}
    newObj.anio = obj.anio + 1;
    return newObj
};

console.log(returnNewObject(newCar));


const restParameters = (...args: (number|string|boolean)[]) : string => {
    const typeOfFirst: string = typeof args[0];
    const typeOfSecond: string = typeof args[1];

    if(typeOfFirst !== typeOfSecond){
        throw new Error("Los dos primeros tipos de datos no coinciden")
    };
    
    args.forEach(arg => {
        let validateType = typeof arg;
        if(validateType !== typeOfFirst){
            throw new Error("Los otros parametros no coinciden con el tipo de  datos de los dos primeros")
        }
    });
    
    return "Los tipos de datos coinciden"

}

console.log(restParameters(1, "2", 3, 4, 6, 7, 8, 10));
