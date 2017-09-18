import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {LoginPage} from  '../login/login';
import {RegisterPage} from  '../register/register';
import {StartPage} from     '../start/start';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

	 slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

	}
	start() {
		this.navCtrl.push(StartPage);
	}
	Signin() {
		this.navCtrl.push(LoginPage);
		}

     Register() {
     	this.navCtrl.push(RegisterPage);
     }
	}


