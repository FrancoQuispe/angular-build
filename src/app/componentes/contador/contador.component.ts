import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  contador:number = 0;
  public nombre:string = 'Iron Man'

  incrementa(value:number):void{
    this.contador += value;
  }

  reseteo():void{
    this.contador=0;
  }

  cambiarNombre(value:string):void{
    this.nombre = value;
  }

}
