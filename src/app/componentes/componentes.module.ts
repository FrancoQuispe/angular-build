import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorComponent } from './contador/contador.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({

    imports:[
        CommonModule
    ],
    exports: [
        ContadorComponent,
        HeroesComponent,
        ListaComponent
    ],
    declarations: [
        ContadorComponent,
        HeroesComponent,
        ListaComponent],
})
export class ComponentesModule { }
