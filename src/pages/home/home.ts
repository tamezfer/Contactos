import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agregar= AgregarPage;
  mostrar= MostrarPage;

  contactos = [
    {id: 0, avatar: "../assets/imgs/girl.png", nombre:"María José Sandoval", correo: "mariajoselsandoval@gmail.com", num: "(33)1364 2296", facebook: "Marijo L. Sandoval", twitter: "@marijosandoval", instagram: "marijolsandoval"},
    {id: 0, avatar: "../assets/imgs/girl2.png", nombre:"Alexandra Arenas", correo: "alexarenaslozoya@gmail.com", num: "(33)1134 2845", facebook: "Alexa Arenas", twitter: "@alexalozoya", instagram: "alexarenasl"},
    {id: 0, avatar: "../assets/imgs/man.png", nombre:"Leonardo Briseño", correo: "leonardobriseñof@gmail.com", num: "(33)3422 7854", facebook: "Leonardo Briseño", twitter: "@leobriseño", instagram: "leobriseñof"},
    {id: 0, avatar: "../assets/imgs/man2.png", nombre:"Juan Andrés Palomera", correo: "jandres.pm15@gmail.com", num: "(33)1027 9043", facebook: "Andrés Palomera",twitter: "@andres.palomera", instagram: "jandresspm"},
   
    ];



  constructor(public navCtrl: NavController) {

  }

  clickAgregar()
    {
      this.navCtrl.push(this.agregar, {contactos: this.contactos});
      
    }

    clickMostrar(c)
    {
      this.navCtrl.push(this.mostrar, c);
      
    }

}
