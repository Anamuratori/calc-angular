import { Component } from '@angular/core';
import { Historico } from './classes/historico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private static VAZIO_DEFAULT = "";

  private _historicoOperacoes: Historico[] = [];

  valorOperacao =  AppComponent.VAZIO_DEFAULT;

  get historicoOperacoes(): Historico[] {
    if(this._historicoOperacoes.length < 4) return [];
    return this._historicoOperacoes.slice(this._historicoOperacoes.length -3, this._historicoOperacoes.length)
  }
  
  acionarTecla(valorOuOperacao: string): void {
      this.valorOperacao += valorOuOperacao;
  }

  limparOperacao(): void {
      this.valorOperacao = AppComponent.VAZIO_DEFAULT;
  }

  confirmarOperacao (): void{
    try {
      // let historico: Historico = new Historico();
      // historico.operacao = this.valorOperacao;
      // this.historicoOperacoes.push(historico);

      let resultadoOperacao = eval(this.valorOperacao);
      this.valorOperacao = resultadoOperacao;

      this._historicoOperacoes.push(
        {operacao: this.valorOperacao, dataCriacao: new Date()} //cria uma classe interna só para esse push
      );
      
    } catch (erro) {
      this._historicoOperacoes.push(
        {operacao: this.valorOperacao, dataCriacao: new Date(), ocorreuErro: true} //cria uma classe interna só para esse push
      )
    } 
  }
}
