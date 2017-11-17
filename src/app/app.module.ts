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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListarUsuariosPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListarUsuariosPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    AppUtilsProvider
  ]
})
export class AppModule {}
