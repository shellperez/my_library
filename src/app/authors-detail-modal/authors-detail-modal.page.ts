import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors-detail-modal',
  templateUrl: './authors-detail-modal.page.html',
  styleUrls: ['./authors-detail-modal.page.scss'],
})
export class AuthorsDetailModalPage implements OnInit {
  
  filterAuthors: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService ) { }

  ngOnInit() {
    this.getAuthorsData();
  }
  closeModal() {
    this.modalController.dismiss();
  }
  
  getAuthorsData(){
    this.filterAuthors = this.libraryService.authors.filter((a: any) => 
    a.id === this.navParams.get("authorId"))[0]
    console.log(this.filterAuthors)

  }
}


