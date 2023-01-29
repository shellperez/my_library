import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksModalPageRoutingModule } from './books-modal-routing.module';

import { BooksModalPage } from './books-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksModalPageRoutingModule
  ],
  declarations: [BooksModalPage]
})
export class BooksModalPageModule {}
