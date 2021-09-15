import { Component } from '@angular/core';
import { Transferencia } from './transferencia';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: Transferencia = {
    "valor": 0,
    "destino": 0
  };

  /* destino!: number;
  valor!: number; */

  transferir($event: any) {
    /* console.log($event.valorEmitir); */
    /* this.destino = $event.valorEmitir.destino;
    this.valor = $event.valorEmitir.valor; */
    //console.log($event)
     this.transferencia.valor = $event.valor;
     this.transferencia.destino = $event.destino;



  }
}
