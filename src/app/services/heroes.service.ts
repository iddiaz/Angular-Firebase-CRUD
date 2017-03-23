import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from './../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {
  
  heroesURL: string = 'https://heroesapp-ff3c2.firebaseio.com/heroes.json';


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

}
