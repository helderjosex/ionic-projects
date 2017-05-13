import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListListsPage } from './list.lists';

@NgModule({
  declarations: [
    ListListsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListListsPage),
  ],
  exports: [
    ListListsPage
  ]
})
export class ListListsModule {}
