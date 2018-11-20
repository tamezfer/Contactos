import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  nombre= '';
  avatar= "../assets/imgs/girl.png";
  num= '';
  correo= '';
  facebook= '';
  twitter= '';
  instagram= '';
  contactos= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos= this.navParams.get("contactos");
  }

  clickNuevo()
  {
    if(this.nombre.length <= 0)
    {
      console.log("La nota esta vacía")
      const alert = this.alertCtrl.create({
        title: "Oops!",
        subTitle: "El contacto debe tener nombre y teléfono.",
        buttons: ['Ok']
      });
      alert.present();
  }
  else
  {
    this.contactos.push({id: 0, avatar: this.avatar, nombre: this.nombre, correo: this.correo, num: this.num, facebook: this.facebook, twitter: this.twitter, instagram: this.instagram});
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
