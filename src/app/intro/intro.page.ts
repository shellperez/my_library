import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt ={
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidePerView: 1, //configuramos un slide por vista
    centerSlides: true,//
    speed: 100 //velocidad movimiento de los slides
  }
  
  slides =[
    
    {
      title:"Aqui encontraras cualquier libro que estes buscando",
      subtitle:"Sin importar el genero",
      img:"https://keibynairobybarahona.files.wordpress.com/2014/08/novelas-y-libros-digitales-todos-los-generos-ebook-2069-mlv3899877577_022013-f.jpg",
      description: "Busca tu libro ahora"
    },
    {
      title:"Para los OTAKUS",
      subtitle:"Tenemos una sección de mangas",
      img:"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/12/mangas.png?fit=1080%2C608&quality=80&ssl=1",
      description: "Piensa en un manga..  Nosotros lo tenemos"
    },
    {
      title:"Tenemos audiolibros y podcasts",
      subtitle:"",
     
      img:"https://educacion30.b-cdn.net/wp-content/uploads/2018/01/storytel-webs-para-descargar-audiolibros-400x363.png",
      description: "Para que sigas disfrutando de tu libro en todo momento"
    },
    {
      title:"Alianzas Literarias",
      subtitle:"Registrate ahora",
      img: "https://www.vanguardia.com/binrepository/716x537/0c30/716d477/none/12204/ORLM/image_content_2096211_20190115151405.jpg",
      description:"Todos los libros que buscas en un solo lugar y sin salir de casa."
    }
  ]

  constructor(private router: Router, private storage: Storage) {
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}