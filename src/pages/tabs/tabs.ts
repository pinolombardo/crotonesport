import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PromozionePage} from '../promozione/promozione';
import {PrimaPage} from'../prima/prima';
import{SecondaPage} from '../seconda/seconda';
import{TerzaPage} from '../terza/terza';
import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root=  PromozionePage;
  tab5Root= PrimaPage;
  tab6Root=SecondaPage;
  tab7Root=TerzaPage;
  tabsColor: string = "Default";
  tabsMode: string = "ios";
  tabsPlacement: string = "top";

  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};

  constructor(private toastCtrl: ToastController) {
  }

  ionViewDidEnter() {

  }

  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };    
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
