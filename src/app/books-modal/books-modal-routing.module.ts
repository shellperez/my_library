import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksModalPage } from './books-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BooksModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksModalPageRoutingModule {}
