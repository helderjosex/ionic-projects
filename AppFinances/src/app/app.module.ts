import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';
import { ModalContasPage } from './../pages/modal-contas/modal-contas';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    HomePage,
    ContasPage,
    ModalContasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    ContasPage,
    ModalContasPage
  ],
  providers: []
})
export class AppModule {}
