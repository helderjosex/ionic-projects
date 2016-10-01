import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContasPage
  ],
  providers: []
})
export class AppModule {}
