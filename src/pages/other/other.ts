import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Other page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OtherPage Page');
  }

}
