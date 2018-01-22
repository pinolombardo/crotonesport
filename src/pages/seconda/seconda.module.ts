import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondaPage } from './seconda';

@NgModule({
  declarations: [
    SecondaPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondaPage),
  ],
})
export class SecondaPageModule {}
