import { ListarUsuariosPage } from './../pages/listar-usuarios/listar-usuarios';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) public nav: Nav;

    rootPage: any = LoginPage;

    public pages = [
        { titulo: 'Home', component: HomePage },
        { titulo: 'Usuários', component: ListarUsuariosPage }
    ];

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    showAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    openPage(component) {
        this.nav.push(component);
    }

    openHome() {
        this.nav.setRoot(HomePage);
    }
}

