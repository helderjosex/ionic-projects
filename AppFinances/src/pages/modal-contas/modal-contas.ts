import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html'
})
export class ModalContasPage {

  private conta;

  constructor(public view: ViewController, params: NavParams) {
    this.view = view;
    this.conta = params.get("parametro") || {descricao: ""};

  }

  cancel() {
    this.view.dismiss();
  }

  salvar() {
    this.view.dismiss(this.conta);
  }

}
