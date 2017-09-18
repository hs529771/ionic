import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
 SignInuser() {
  if(this.user.value == "" || this.password.value == "") {
     let alert = this.alertCtrl.create({
      title: 'fill all field',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  else {
 	let alert = this.alertCtrl.create({
      title: 'Login Successfully!',
      subTitle: this.user.value,
      buttons: ['OK']
    });
    alert.present();
}
 	console.log(this.user.value, this.password.value);
 }

}
