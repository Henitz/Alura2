import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  [x: string]: any;

  @Output()
  aoTransferir: EventEmitter<any> = new EventEmitter<any>();

  valor!: number;
  destino!: number;

    /* transferir($event: any) {
    console.log('Solicitada nova transferencia');
     console.log('valor: ', this.valor);
    console.log('destino: ', this.destino);
    /* const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.service.adicionar($event)
  }  */










  constructor() { }

  ngOnInit(): void {

  }

}
