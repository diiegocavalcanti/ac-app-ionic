
import { ListarPokemonsPage } from './../pages/listar-pokemons/listar-pokemons';
import { SobrePage } from './../pages/sobre/sobre';
import { ListarUsuariosPage } from './../pages/listar-usuarios/listar-usuarios';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuariosServiceProvider } from './../providers/usuarios-service/usuarios-service';
import { AppUtilsProvider } from '../providers/app-utils/app-utils';
import { PokeProvider } from '../providers/poke/poke';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListarUsuariosPage,
    SobrePage,
    ListarPokemonsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListarUsuariosPage,
    SobrePage,
    ListarPokemonsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    AppUtilsProvider,
    PokeProvider
  ]
})
export class AppModule {}
