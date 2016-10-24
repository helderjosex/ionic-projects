import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContasPage } from '../contas/contas';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  rootPage: any = HomePage;
  pages: Array<{title: string, icon: string, page: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      {title: 'Home', icon: 'list-box', page: HomePage},
      {title: 'Contas', icon: 'list-box', page: ContasPage}
    ]

  }

  openPage(page: any) {
    this.rootPage = page;
  }

}
