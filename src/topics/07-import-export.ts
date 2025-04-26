
import {Product,taxCalculation ,tax} from './06-function-destructurin';

const shoppingCart: Product[] = [

    {
        descripcion: 'Nokia',
        price: 149.0
    },
    {
        descripcion: 'iPad',
        price: 32.4
    }
];


const [total, totalTax] = taxCalculation({
    
    products: shoppingCart,
    tax: tax
});


console.log('Total', total);
console.log('Tax', totalTax);