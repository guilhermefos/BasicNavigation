import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Other2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-other2',
  templateUrl: 'other2.html'
})
export class Other2Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Other2Page Page');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
