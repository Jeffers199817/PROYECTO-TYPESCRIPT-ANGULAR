/*export class Person {

    public name: string;
    public addres: string;

    constructor(name: string, addres: string) {
        this.name = name;
        this.addres = addres;
        
    }
}
    */

export class Person{

    constructor(public name: string, public addres: string = 'pifo') {
        
    }
}

    const ironman = new Person('Jefferson', 'Puembo');

    console.log(ironman.addres);
