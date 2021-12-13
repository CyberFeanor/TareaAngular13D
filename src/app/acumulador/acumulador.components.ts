import { Component } from "@angular/core";

@Component({
  selector: 'app-acumulador',
  template: `
  <h1>
    {{titulo}}
    Base de acumulador: {{base}}
  </h1>

  <button (click)="Acumulador(base)">+{{base}}</button>
  <span>{{numero}}</span>
  <button (click)="Acumulador(base)">-{{base}}</button>


  `
})

export class ContadorComponent{
  titulo:string = 'angularBasico3';
  numero:number = 10;
  base: number = 5;

  /*public Sumar() {
    this.numero += 1;
  }

  public Restar() {
    this.numero -= 1;
  }*/

  Acumulador(valor:number){
     this.numero += valor;
  }
}
