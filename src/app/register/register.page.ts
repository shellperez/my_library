import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message = {
    name:[
      {type: "required", message: "Obligatorio",},
     
    ],
    last_name:[
      {type: "required", message: "Obligatorio"},
     
    ],
    document_type:[
      {type: "required", message: "Obligatorio"},
    ],
    document_number:[
      {type: "required", message: "Obligatorio"},
    ],
    career:[
      {type: "required", message: "Obligatorio"},
    ],
    email: [
      {type: "required", message: "El Email es Obligatorio"},
      {type: "pattern", message: "Tu Email no es valido"}
    ], 
    password: [
      {type: "required", message: "La contraseña es Obligatoria"}
    ]
    
  }

  errorMessage: any;


  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController: AlertController) { 

      this.registerForm = this.formBuilder.group({
        name: new FormControl("",
           Validators.compose(
            [Validators.required,
            ]
           )),
        last_name: new FormControl("",
        Validators.compose(
         [Validators.required,
        ]
        )),
        document_type: new FormControl("",
        Validators.compose(
         [Validators.required,
]
        )),
        document_number: new FormControl("",
        Validators.compose(
         [Validators.required,
]
        )),
        career: new FormControl("",
        Validators.compose(
         [Validators.required,
]
        )),
        email: new FormControl("",
        Validators.compose(
         [Validators.required,
]
        )),
        password: new FormControl("",
        Validators.compose(
         [Validators.required,
]
        ))
      });
    }

    ngOnInit() {
    }
  
    goToLogin(){
      this.navCtrl.navigateBack("/login");
    }
  
    registerUser(register_form: any){
      console.log(register_form)
      this.authenticate.registerUser(register_form).then( res => {
        this.navCtrl.navigateForward("/login");
      }).catch(err => {
        this.presentAlert("Opps", "Hubo un error", err);
      })
    }
 
    async presentAlert(header: any, subHeader: any, message: any) {
      const alert = await this.alertController.create(
        {
          header: header,
          subHeader: subHeader,
          message: message,
          buttons: ['Ok']
        }
      );
      await alert.present();
    }
  }