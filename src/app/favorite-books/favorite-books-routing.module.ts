import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteBooksPage } from './favorite-books.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteBooksPageRoutingModule {}
