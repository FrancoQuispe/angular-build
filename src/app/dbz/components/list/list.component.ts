import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] =[{
    name:'Trunks',
    power:10
  }]



  onDeleteCharacter(id:string):void{
    this.deleteCharacter.emit(id);
  }

}
