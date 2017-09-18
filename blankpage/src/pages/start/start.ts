import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from  '../login/login';
import {RegisterPage} from  '../register/register';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  back() {
  	this.navCtrl.pop();
  }
  Signin() {
		this.navCtrl.push(LoginPage);
  }

   Register() {
     	this.navCtrl.push(RegisterPage);
   }
}
