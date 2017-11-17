import { SobrePage } from './../sobre/sobre';
import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { MyApp } from './../../app/app.component';
import { ListarUsuariosPage } from './../listar-usuarios/listar-usuarios';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController, private usuarioService: UsuariosServiceProvider) {
    
  }

  qtde = this.usuarioService.getUsuarios().length + ' Registros';

  itensHome = [
    { titulo: 'Usuários', subtitulo: this.qtde, img: 'http://lorempixel.com/400/400/abstract/1/', component: ListarUsuariosPage },
    { titulo: 'Sobre', subtitulo: 'Saiba Mais', img: 'http://lorempixel.com/400/400/nature/', component: SobrePage }
  ];


  open(component) {
    this.navCtrl.push(component);
  }


}
