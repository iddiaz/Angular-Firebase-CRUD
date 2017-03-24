import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) { }

  ngOnInit() {
    this._heroesService.getHeroes()
      .subscribe( data => {
        // si nos fijamos no nos devuelve un array esta base de datos, nos devuelve un objeto que dentro tiene otros objetos, por lo que no podemos recorrerlo aun
        //console.log(data);
        
        // Podemos transformarlo aqui, pero esta aproximación no es la mejor opción
        // for (let key$ in data ){
        //   // console.log(data[key$]);
        //   let h = data[key$];
        //   h.key$ = key$;
        //   this.heroes.push(data[key$])
         
        // }
        // console.log(this.heroes);
        // Lo mejor es crearse un pipe que haga un array de llaves.
        this.heroes = data;
        
      })
  }
  // recibe la key de firebase
  borrarHeroe( key$: string ) {
    this._heroesService.borrarHeroe()
      .subscribe( respuesta => console.log(respuesta))

  }

}
