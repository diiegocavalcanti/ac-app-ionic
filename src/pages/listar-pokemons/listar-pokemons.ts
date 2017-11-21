import { pokemon } from './../../models/pokemon';
import { PokeProvider } from './../../providers/poke/poke';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListarPokemonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-listar-pokemons',
  templateUrl: 'listar-pokemons.html',
})
export class ListarPokemonsPage implements OnInit{

  pokemons:pokemon[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pokeService: PokeProvider) {
  }

  ngOnInit(){
    this.listarPokes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarPokemonsPage');
  }

  listarPokes(){
    this.pokeService.getPokes().subscribe( result => {
      this.pokemons = result;
    });
  }


}
