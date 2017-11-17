import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosServiceProvider {

  usuarios = [
    {nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' },
    {nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' },
    {nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosServiceProvider Provider');
  }

  getUsuarios(){
    return this.usuarios;
  }

  setUsuario(usuario){
    this.usuarios.push(usuario);
  }

}
