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


export class Hero extends Person{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ) {
        super(realName, 'puembo');
    }

}

    const ironman = new Hero('Jefferson',4, 'Puembo');

    console.log(ironman);
