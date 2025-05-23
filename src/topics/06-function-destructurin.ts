export interface Product{
    descripcion: string;
    price: number;
}

const phone: Product={
    descripcion:'Nokia A1',
    price:34.0
}

const tablet: Product = {
    descripcion: 'iPad Air',
    price: 342.0
}


interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): [number,number]{
//function taxCalculation({tax, products}: TaxCalculationOptions): [number,number]{
export function taxCalculation(options: TaxCalculationOptions): [number,number]{
    const { tax, products } = options;
    let total = 0;
    

    products.forEach(({price}) => {
        total += price;
    })


    return [total, total*tax];
}



export const shoppingCart = [phone, tablet];
export const tax = 0.15;

const [total, totalTax] = taxCalculation(
    {
        products: shoppingCart,
        tax: tax
    }
);

console.log('Total', total);
console.log('Tax', totalTax);


