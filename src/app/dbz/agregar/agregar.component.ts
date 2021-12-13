import { Personaje } from '../interfaces/dbz.interfaces';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnChanges{
  //@Input () personajes:Personaje[]=[];

  @Input() mostrar!:boolean;
  @Input() nuevo: Personaje={
    nombre:"Pepito Primo",
    poder:0
  }

  constructor(private dbzService:DbzService){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios Aplicados');
  }
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    console.log(this.nuevo);
    //this.personajes.push(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0
    }
  }

}
