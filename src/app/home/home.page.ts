import { Component } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;
  booksOff: any;

  slidesOps = {
   inicialSlide: 1,
   slidesPerview: 3,
   centerdSlides: true,
   speed : 100
  }
  constructor(
    private LibraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController
    ) {}

  ionViewDidEnter(){
    this.LibraryService.getAuthors().then( res => {
      this.authors = res;
      this.LibraryService.authors = res
    })

    this.booksOff = this.LibraryService.getBooksOffline();
    console.log(this.booksOff.books);
  }
  
  async showBooks(author:any) {
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }
  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }
   
  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }

  goToTopBooks(){
    this.navCtrl.navigateForward("/menu/top10");
    this.menu.close();
  }

}
