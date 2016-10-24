import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nome;

  constructor(public navCtrl: NavController) {
    this.nome = 'Nome do usuário';
  }

  getNome(){
    return 'retornado pelo metodo: ' + this.nome;
  }
}
