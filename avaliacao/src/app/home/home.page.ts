import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso!: number;
  altura!: number;
  resultado!: number;
  classificacaoIMC!: string;

  calcularIMC() {
    if (this.peso && this.altura) {
      this.resultado = this.peso / (this.altura * this.altura);
      this.classificacaoIMC = this.getClassificacaoIMC(this.resultado);
    }
  }

  getClassificacaoIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  }
}