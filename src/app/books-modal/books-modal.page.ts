import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  books: any

  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService
    ) { }

  ngOnInit() {
    this.libraryService.getBooksAuthor(this.author.id).then(books => {
      this.books = books;
    })
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }  
}