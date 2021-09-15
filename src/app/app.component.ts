import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any;

  /* destino!: number;
  valor!: number; */

  transferir($event: any) {
    /* console.log($event.valorEmitir); */
    /* this.destino = $event.valorEmitir.destino;
    this.valor = $event.valorEmitir.valor; */

    this.transferencia = $event.valorEmitir;
    /* corrigido */

  }
}
