import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfereciaService {
  [x: string]: any;



  private listatransferencia: any[] = [];

  constructor() {
    this.transferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

 adicionar(transferencia: any) {
    console.log('Solicitada nova transferencia');
    /* console.log('valor: ', this.valor);
    console.log('destino: ', this.destino); */
    /* const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir); */

    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
