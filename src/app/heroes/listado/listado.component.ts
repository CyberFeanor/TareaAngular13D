import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log("Hola desde el construcctor");
  }

  ngOnInit(): void {
    console.log("Hola desde el ng");
  }

  heroes:string[] = ["Spiderman","Thor","Hulk","Ironman","Loki","Ojo de Halcón"];

  /**
   * name
   */
  public delete() {
    this.heroes.pop();
  }

  heroeBorrado:string|undefined="";
  public guardarHeroe(){
    this.heroeBorrado= this.heroes.pop();
  }

}
