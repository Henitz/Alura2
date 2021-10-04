import { TransfereciaService } from '../services/transferecia.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


@Input()
transferencias: any[] = [];



  constructor(private service: TransfereciaService) { }

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }

}
