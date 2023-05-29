import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {

    public characters: Character[] = [{
        id:uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id:uuid(),
        name: 'Goku',
        power:9500
    },{
        id:uuid(),
        name:'Vegeta',
        power:7500
    },
    {
        id:uuid(),
        name:'Yamcha',
        power:500
    }];

    addCharacter(character:Character):void{

        const personaje: Character = {id:uuid(),...character};

        this.characters.push(personaje);
    }

    deleteCharacter(id:string):void{
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}