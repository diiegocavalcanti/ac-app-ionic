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

  usuarios = [{nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' }];

 

}
