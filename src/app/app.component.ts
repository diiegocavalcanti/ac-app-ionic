import { ListarPokemonsPage } from './../pages/listar-pokemons/listar-pokemons';
import { SobrePage } from './../pages/sobre/sobre';
import { ListarUsuariosPage } from './../pages/listar-usuarios/listar-usuarios';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) public nav: Nav;

    rootPage: any = LoginPage;

    public pages = [
        { titulo: 'Home', component: HomePage },
        { titulo: 'Usuários', component: ListarUsuariosPage },
        { titulo: 'Sobre', component: SobrePage },
        { titulo: 'Github', component: ListarPokemonsPage }
    ];

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    openPage(component) {
        this.nav.push(component);
    }

    openHome() {
        this.nav.setRoot(HomePage);
    }
}

