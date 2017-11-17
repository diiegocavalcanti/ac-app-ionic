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

  usuarios = [
    {nome: 'Diego Cavalcanti', matricula: '12345'},
    {nome: 'Rafael Lira', matricula: '12345'},
    {nome: 'Walteann Cost', matricula: '12345'},
    {nome: 'Diego Cavalcanti', matricula: '12345'},
    {nome: 'Rafael Lira', matricula: '12345'},
    {nome: 'Walteann Cost', matricula: '12345'},
    {nome: 'Diego Cavalcanti', matricula: '12345'},
    {nome: 'Rafael Lira', matricula: '12345'},
    {nome: 'Walteann Cost', matricula: '12345'},
    {nome: 'Diego Cavalcanti', matricula: '12345'},
    {nome: 'Rafael Lira', matricula: '12345'},
    {nome: 'Walteann Cost', matricula: '12345'},
    {nome: 'Diego Cavalcanti', matricula: '12345'},
    {nome: 'Rafael Lira', matricula: '12345'},
    {nome: 'Walteann Cost', matricula: '12345'}

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarUsuariosPage');
  }

  getUsuarios(){
    return this.usuarios;
  }

}
