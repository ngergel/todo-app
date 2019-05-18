import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage {
  constructor(public toastCtrl: ToastController) {}

  async toast() {
    const toast = await this.toastCtrl.create({
      message: 'Toast!',
      duration: 2000
    });
    toast.present();
  }
}
