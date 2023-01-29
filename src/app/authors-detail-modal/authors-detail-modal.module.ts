import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorsDetailModalPageRoutingModule } from './authors-detail-modal-routing.module';

import { AuthorsDetailModalPage } from './authors-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorsDetailModalPageRoutingModule
  ],
  declarations: [AuthorsDetailModalPage]
})
export class AuthorsDetailModalPageModule {}
