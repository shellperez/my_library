import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailModalPage } from './book-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BookDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailModalPageRoutingModule {}
