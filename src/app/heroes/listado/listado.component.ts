import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  listados: string [] = ['Jesus', 'Diana', 'Novios', 'comprometidos'];
  borrado: string = '';

 borrarHoroe(){
   this.borrado = this.listados.pop() || '';
  }

}
