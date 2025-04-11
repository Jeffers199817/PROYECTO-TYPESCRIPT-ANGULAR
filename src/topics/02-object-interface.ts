


const skills :string[]= ['Bash', 'Counter', 'Healing'];


//Para que sea estrictamente dentro del objeto el name string hay que utilizar una intergace




//Interface que es una plantilla para la estrucuta del objeto strider
interface Character { 
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;

}

// creación de un objeto en typescript.

  const strider: Character = {
      name: 'Strider',
      hp: 100,
      skills: ['Bash', 'Counter'],

  }


//Asiganación de valor a una propiedad de un objeto. 

strider.hometown = 'Ecuador-Puembo-chiche';

//Impresion del objeto normal  y en tabla 

console.log("Forma normal del objeto.");
console.log(strider);

console.log( "Forma de tabla del objeto.")
console.table(strider);




export { };
