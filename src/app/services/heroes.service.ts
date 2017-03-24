import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from './../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {
  
  heroesURL: string = 'https://heroesapp-ff3c2.firebaseio.com/heroes.json';

  heroeURL: string = 'https://heroesapp-ff3c2.firebaseio.com/heroes';


  constructor(private http: Http ) { }
  
  // Crear heroe - POST heroe.
  nuevoHeroe (heroe: Heroe ) {

    let body = JSON.stringify( heroe );
    
    // definición de encabezado de la petición
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
      .map( res => {
        console.log( res.json() );
        return res.json();
      });
  }

    // PUT en bbdd
  actualizarHeroe( heroe: Heroe, key$: string ) {
    let body = JSON.stringify( heroe );

    // Esto no es necesiario es solo a modo demostrativo de envio de headers en la solicitud
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.put( url, body, {headers})
      .map( res => {
        // console.log(res.json());
        return res.json();
      });
  }

  getHeroe( key$: string ) {
    let url = `${this.heroeURL}/${ key$ }.json`;

    return this.http.get( url ).map( res => res.json());
  }

  getHeroes() {
    return this.http.get( this.heroesURL ).map( res => res.json());
  }


}
