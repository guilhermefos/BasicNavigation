import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OtherPage } from '../other/other';
import { Other2Page } from '../other2/other2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToOtherPage() {
    //push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(OtherPage);
  }

    goToOther2Page() {
    //push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(Other2Page);
  }

}
