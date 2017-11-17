import { HomePage } from './../home/home';
import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    username: string;
    password: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public app: MyApp) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login() {
        if (this.username == 'admin' && this.password == '1234') {
            this.app.openHome();
        } else {
            
            this.app.showAlert('Atenção', 'Login ou senha incorretos');


        }
    }

}
