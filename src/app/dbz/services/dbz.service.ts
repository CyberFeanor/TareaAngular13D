import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

  private _personajes:Personaje[]=[
    {
      nombre:"Vegeta",
      poder:20000
    },{
      nombre:"Vegeta",
      poder:20000
    }
  ];

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }

  constructor(){
    console.log("Servicio iniciado");
  }


}
