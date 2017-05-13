import { Component } from '@angular/core';

import { ListListsPage } from './../lists/list/list.lists';
import { ListCategoriesPage } from './../categories/list/list.categories';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListListsPage;
  tab2Root = ListCategoriesPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
