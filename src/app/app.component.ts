import { TransfereciaService } from './services/transferecia.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'bytebank';

  /* transferencias: any[] = []; */

  /* destino!: number;
  valor!: number; */
  constructor(private service: TransfereciaService) {

  }
  transferir($event: any) {
    /* console.log($event.valorEmitir); */
    /* this.destino = $event.valorEmitir.destino;
    this.valor = $event.valorEmitir.valor; */
    //console.log($event)
     //this.transferencia.valor = $event.valor;
     //this.transferencia.destino = $event.destino;

     /* const transferencia ={...$event, data: new Date()};

    /*  this.transferencias.push($event); */
     /* this.transferenas.push(transferencia); */
    this.service.adicionar($event);


  }
}
