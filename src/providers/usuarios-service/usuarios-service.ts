import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosServiceProvider {

  usuarios = [
    {id:1, nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {id:2, nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {id:3, nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' },
    {id:4, nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {id:5, nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {id:6, nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' },
    {id:7, nome: 'Diego Cavalcanti', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/16603107_1469510069726101_1911088555142596249_n.jpg?oh=04deaf43a14618290c3406b413445f52&oe=5A97BD71' },
    {id:8, nome: 'Rafael Lira', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzaAAAAJGIyNjJkYzMwLTVhZjYtNDgwYi05NmEwLWI2ZWEwMTZhZmU1Nw.jpg ' },
    {id:9, nome: 'Walteann Cost', sobre:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto, facilis, debitis rerum maxime itaque ab alias numquam cumque minima maiores soluta harum ratione non ducimus unde excepturi et? Autem facilis facere, explicabo, impedit accusamus, sit quaerat maiores animi omnis praesentium quas ab amet perferendis optio eveniet! Temporibus, amet perspiciatis.', matricula: '12345', img: 'https://scontent.frec1-2.fna.fbcdn.net/v/t1.0-9/13895358_1219329104757225_7041317009908150220_n.jpg?oh=a3361360d1fa4fc1c34b7101f5a62957&oe=5A61AD17' }
  ];


  getUsuarios(){
    return this.usuarios;
  }

  setUsuario(usuario){
    this.usuarios.push(usuario);
  }

  deletarUsuario(id){
    for(let i=0; i < this.usuarios.length; i++){
      if(this.usuarios[i].id == id){
        this.usuarios.splice(i,1);
      }
    }

    return true;
  }

}
