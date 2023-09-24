import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [NavParams],
})
export class AppComponent {
  themeToggle = false;

  public pagesInicio = [
    { title: 'Inicio', url: '/creditos' }
  ];

  constructor() {

  }

  async ngOnInit() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }

}
