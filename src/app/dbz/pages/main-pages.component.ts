import { Component} from '@angular/core';
import { Character } from '../interface/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

    constructor(private dbzService:dbzService){}
    
    get characters():Character[]{
        return [...this.dbzService.characters];
    }

    deleteCharacter(id:string):void{
        this.dbzService.deleteCharacter(id);
    }

    addCharacter(character:Character):void{
        this.dbzService.addCharacter(character);
    }

}