import { MyApp } from './../../app/app.component';
import { ListarUsuariosPage } from './../listar-usuarios/listar-usuarios';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itensHome = [
    {titulo: 'Usuários', subtitulo: '41 Listings', img: 'http://lorempixel.com/400/400/abstract/1/', component: ListarUsuariosPage}
  ];

  
  constructor(public navCtrl: NavController) {

  }

  open(component){
    this.navCtrl.push(component);
  }


}
