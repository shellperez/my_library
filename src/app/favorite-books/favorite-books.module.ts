import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteBooksPageRoutingModule } from './favorite-books-routing.module';

import { FavoriteBooksPage } from './favorite-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteBooksPageRoutingModule
  ],
  declarations: [FavoriteBooksPage]
})
export class FavoriteBooksPageModule {}
