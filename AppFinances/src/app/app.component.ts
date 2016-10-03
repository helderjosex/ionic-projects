import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';

@Component({
  templateUrl: '../pages/app.html'
})
export class MyApp {

  private home;
  private contas;
  private rootPage;

  constructor(platform: Platform) {

    this.home = HomePage;
    this.contas = ContasPage;
    this.rootPage = this.home;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(option){
    this.rootPage = option;
  }
}