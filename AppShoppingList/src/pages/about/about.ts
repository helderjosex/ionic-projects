import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  version: string; 

  constructor(public navCtrl: NavController) {
      this.version = "1.0.0";
  }

}
