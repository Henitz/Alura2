import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output()
  valoresComErro = new EventEmitter<string>()
  aoTransferir: EventEmitter<any> = new EventEmitter<any>();

  valor!: number;
  destino!: number;
  mensagem!: string;

  transferir() {
    console.log('Solicitada nova transferencia');
    /* console.log('valor: ', this.valor);
    console.log('destino: ', this.destino); */




    if (this.ehValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);
  }
o
    /* this.aoTransferir.emit({valorEmitir}); */
    /* this.limparCampos(); */
  }

  private  ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
}


 exibirModalErro(mensagem){
  // implementação da lógica para exibir o modal

}

   limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
