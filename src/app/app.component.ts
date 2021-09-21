import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  /* destino!: number;
  valor!: number; */

  transferir($event: any) {
    /* console.log($event.valorEmitir); */
    /* this.destino = $event.valorEmitir.destino;
    this.valor = $event.valorEmitir.valor; */
    //console.log($event)
     //this.transferencia.valor = $event.valor;
     //this.transferencia.destino = $event.destino;

     const transferencia ={...$event, data: new Date()};

    /*  this.transferencias.push($event); */
     this.transferencias.push(transferencia);



  }
}
