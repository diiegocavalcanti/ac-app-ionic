import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ListarUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-listar-usuarios',
  templateUrl: 'listar-usuarios.html',
})
export class ListarUsuariosPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private service: UsuariosServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarUsuariosPage');
  }

  usuarios = this.service.getUsuarios();

 

}
