import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toast: any;

  constructor(private toastController: ToastController) { }

  async showToastSuccess(message: string){
    this.toast = await this.toastController.create({
      message,
      header: 'Operación completada',
      duration: 1500,
      position: 'top',
      icon: 'thumbs-up-sharp'
    });
    await this.toast.present()
  }
}
