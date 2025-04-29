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

    constructor(public name: string, public addres: string = 'pifo', public logros:number=0) {
        
    }
}


export class Hero {

  //  public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
       /* this.person = new Person('Jefferson', 'Puembo1');*/
    }
}
    
    const tony = new Person('Jefferson', 'Puembo', 43)
    const ironman = new Hero('Super Heroe',44, 'Alquinga', tony);

    console.log(ironman);
