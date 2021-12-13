import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnDestroy {
  // @Input() personajes:any[]=[];
  get personajes(){
    return this.dbzService.personajes;
  }


  constructor(private dbzService:DbzService){

  }
  ngOnInit(): void {
    console.log('Cuadro iniciado');
  }
  ngOnDestroy(): void {
    console.log('Oculta el cuadro');
  }


}
