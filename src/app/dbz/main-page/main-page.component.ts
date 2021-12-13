import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit,OnDestroy,OnChanges {

  nombre:string = "Vegeta ";
  mostrar:boolean = true;

  constructor(private dbzService:DbzService){

  }

  ngOnInit(): void {
    console.log('ngOnInit Nuevo');
  }

  ngOnDestroy(): void {
    console.log('ngDestroy Nuevo');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Nuevo');
  }

  agregarNuevoPersonaje(personaje:Personaje){
    console.log(personaje);
  }


}
