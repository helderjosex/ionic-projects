
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ContasModel } from '../../models/ContasModel';
import { ModalContasPage } from '../modal-contas/modal-contas';


@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {
  
  private conta:ContasModel;
  private listContas: any[];

  constructor(public nav: NavController, public modalCtrl: ModalController) {

    this.conta = new ContasModel();
    this.listContas = this.conta.getList();
    this.nav = nav;    
  }

  insert() {
    let modal = this.modalCtrl.create(ModalContasPage);

    modal.onDidDismiss(data => {
      this.conta.insert(data);
    });

    modal.present();
  }

  edit(conta) {
    let modal = this.modalCtrl.create(ModalContasPage, { parametro: conta });

    modal.onDidDismiss(data => {
      this.conta.edit(data);
    });

    modal.present();
  }

  delete(conta) {
    console.log(conta);
    this.conta.delete(conta);
  }

}
