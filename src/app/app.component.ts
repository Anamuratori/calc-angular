import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private static VAZIO_DEFAULT = "";

  valorOperacao =  AppComponent.VAZIO_DEFAULT;
  
  acionarTecla(valorOuOperacao: string): void {
    if (valorOuOperacao == "="){
      this.valorOperacao = eval(this.valorOperacao);
    } else {
      this.valorOperacao += valorOuOperacao;
    }
  }

  limpar(valorOuOperacao: string): void {
      this.valorOperacao = AppComponent.VAZIO_DEFAULT;
  }


}
