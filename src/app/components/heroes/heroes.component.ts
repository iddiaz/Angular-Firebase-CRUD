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
        this.heroes = data;
        
      })
  }
  // recibe la key de firebase
  borrarHeroe( key$: string ) {
    this._heroesService.borrarHeroe( key$ )
      .subscribe( respuesta => {
        if ( respuesta ) {
          console.error(respuesta);
        } else {
          // todo ha ido bien, borramos el objeto
          delete this.heroes[ key$];
        }
      });

  }

}
