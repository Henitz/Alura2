import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  destino!: number;
  valor!: number;
  transferir($event: any) {
    console.log($event.valorEmitir);
    this.destino = $event.valorEmitir.destino;
    this.valor = $event.valorEmitir.valor;
  }



}

