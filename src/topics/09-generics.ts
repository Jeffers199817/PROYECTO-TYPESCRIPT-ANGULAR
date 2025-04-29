export function whatsMyType<T>(argument: T):T {

    return argument;  
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(4523);
const amIArray = whatsMyType<number[]>([2, 4, 5, 43, 5, 4]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));