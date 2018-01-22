import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { PromozionePage } from '../pages/promozione/promozione';
import{PrimaPage} from '../pages/prima/prima';
import{SecondaPage} from '../pages/seconda/seconda';
import{TerzaPage} from '../pages/terza/terza';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { Settings } from '../pages/settings/settings';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    PromozionePage,
    Settings,
    PrimaPage,
    SecondaPage,
    TerzaPage,
    ScrollableTabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back' ,
      backButtonText: '',
      pageTransition: 'md-transition',
      activator: 'ripple',
      mode: 'md',
      tabsPlacement: 'top', 
      tabsHideOnSubPages: true,
      tabsHighlight : true
    }),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    PromozionePage,
    PrimaPage,
    SecondaPage,
    TerzaPage,
    Settings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
