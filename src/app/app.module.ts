import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/other/other';
import { Other2Page } from '../pages/other2/other2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    Other2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    Other2Page
  ],
  providers: []
})
export class AppModule {}
