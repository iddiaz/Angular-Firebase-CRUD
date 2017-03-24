
import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../interfaces/heroe.interface';

import { HeroesService } from './../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
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
       this.id = parametros['id'];

       if( this.id !== 'nuevo') {
         this._heroesService.getHeroe( this.id ).subscribe( heroe => this.heroe = heroe );
       }

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

  agregarNuevo(forma: NgForm ) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }


}
