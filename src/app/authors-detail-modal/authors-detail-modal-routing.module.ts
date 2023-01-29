import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsDetailModalPage } from './authors-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorsDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsDetailModalPageRoutingModule {}
