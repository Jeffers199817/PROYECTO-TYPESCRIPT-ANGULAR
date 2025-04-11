

//FUnciones normales 
function addNumbers(a:number,b:number){
    
    return a + b;
}

//Arrow function se declara una varibale de tipo const y una función => 

const addNumbersArrow = (a: number, b: number):string =>{
    
    return `${a + b}`;

}

//funcion noraml

function multiply(firstNumber: number, secondNumber?:number, base:number = 4) {
    return firstNumber * base;
}


//Asignar valor de la funcioon 
const resultado : string= addNumbers(2, 4).toString();

const resultado2: string = addNumbersArrow(4, 5);

const resultadoMultiply: number = multiply(4);

//Imprimir valor del resultado de la función 
console.log({ resultado });

console.log({ resultado2 });

console.log({ resultadoMultiply });





export { };