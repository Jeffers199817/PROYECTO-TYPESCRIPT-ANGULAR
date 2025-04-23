


interface Character{ 
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number): string => {
    console.log("Ingresando vida +++++++ " + amount);
    
    if (character.hp < 100 && (character.hp + amount)<100) {
        character.hp += amount;
        console.log(`Puntos de vida actual es: ${character.hp}`);
        return "aumento de vida";
    } else {
        console.log(`El personaje solo puede recibir ${100-character.hp} puntos de vida`)
        
    }


  return "vida completa";

    
}

const strider: Character={
    name:'Jefferson',
    hp: 34,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }

}
strider.showHp();
healCharacter(strider, 34);
strider.showHp();
healCharacter(strider, 4);
strider.showHp();
healCharacter(strider, 43);



export {};