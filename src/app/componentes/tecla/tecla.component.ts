import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit {

  @Input()
  rotulo: string = "";

  @Input()
  valor: string = "";

  @Output()
  clicar = new EventEmitter<string>();

  constructor() {  }

  ngOnInit(): void {
  }

  ngOnChanges (changes: SimpleChanges) : void {
    changes["rotulo"];
    changes["valor"];
  }

  exibirRotuloSeHouver(): string {
    return this.rotulo == "" ? this.valor : this.rotulo;
  }

  clicado() {
    this.clicar.emit(this.valor);
  }

}
