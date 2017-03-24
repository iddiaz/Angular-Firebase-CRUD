import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  // para que el pipe esté pendiente del ciclo de cambios que haga angular
  // y evite el error que se produce al borrar el objeto de la lista
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any ): any {
    let keys = [];

    for( let key in value ) {
      keys.push(key)
    }

    return keys;
  }

}
