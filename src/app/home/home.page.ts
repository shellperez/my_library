import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpt ={
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidePerView: 1, //configuramos un slide por vista
    centerSlides: true,//
    speed: 100 //velocidad movimiento de los slides
  }

  constructor() {}

}
