import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../interfaces/heroe.interface';

// import { } from '@angular/forms';

import { HeroesService } from './../../services/heroes.service';
import { Router } from '@angular/router';

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
  }

  constructor( private _heroesService: HeroesService ) { }

  ngOnInit() {}

  guardar() {
    // console.log(this.heroe);

    // insertando los datos
    this._heroesService.nuevoHeroe( this.heroe )
      // tenemos que suscribirnos para que pueda actuar el observable
      .subscribe( data => {});
  }

}
