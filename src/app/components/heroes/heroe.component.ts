import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../interfaces/heroe.interface';

// import { } from '@angular/forms';

import { HeroesService } from './../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo: boolean = false;
  id: string;


  constructor( private _heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {

     this.activatedRoute.params.subscribe( parametros => {
       console.log(parametros);
       // Obtenemos el valor del paramatro de la url.
       // los parametros vienen con el nombre dado en el router (:id)
       this.id = parametros['id'];
     });
  }

  ngOnInit() {}

  guardar() {
    // console.log(this.heroe);

     if( this.id === 'nuevo'){
      // insertando
      this._heroesService.nuevoHeroe( this.heroe )
      // tenemos que suscribirnos para que pueda actuar el observable
      .subscribe( data => {
        // navega a la pagina del Heroe, el id es dato.name porque así se llama el que devulve la bbdd de firebase.
        this.router.navigate(['/heroe', data.name]);
      },
      error => console.log(error));

       } else {
         //actualizando
         this._heroesService.actualizarHeroe( this.heroe, this.id )
           .subscribe( data => {
             console.log(data);
           }, error => {
             console.log(error);
           });
         
       }

   
  }


}
