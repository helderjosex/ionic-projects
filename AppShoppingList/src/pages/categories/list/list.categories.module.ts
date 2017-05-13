import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCategoriesPage } from './list.categories';

@NgModule({
  declarations: [
    ListCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCategoriesPage),
  ],
  exports: [
    ListCategoriesPage
  ]
})
export class ListCategoriesModule {}
