import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  public person = {
    name:{
      first:"",
      last:""
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.person;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
