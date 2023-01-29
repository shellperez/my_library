import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LibraryService } from '../services/library.service';
@Component({
  selector: 'app-book-detail-modal',
  templateUrl: './book-detail-modal.page.html',
  styleUrls: ['./book-detail-modal.page.scss'],
})
export class BookDetailModalPage implements OnInit {
  book: any;
  like_button: boolean = false;
  user_id: any;
  
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private libraryService: LibraryService) { }

  async ngOnInit() {
    this.book = this.navParams.get("book");
    this.user_id = await this.storage.get("user_id");
    this.libraryService.getCheckLikeBook(this.user_id, this.book.id).subscribe((data: any) => {
      this.like_button = data.like
    },
      (error) =>
        console.log(error)
    )
  }
  closeModal() {
    this.modalController.dismiss();
  }
  like() {
    this.libraryService.likeBook(this.user_id, this.book.id).subscribe((data: any) => {
      this.like_button = true;
    }, (error) =>
      console.log(error)
    )
  }

  disLike(){
    this.like_button = false;
    this.libraryService.disLike(this.user_id, this.book.id).subscribe((data:any)=>{
      if (data.status =="OK"){
        this.like_button = false
      }  
    }, (error) =>
       console.log(error)
    )
  }
}

