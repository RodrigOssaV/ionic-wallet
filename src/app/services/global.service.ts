import { Injectable } from '@angular/core';
import { ShowServices } from '../components/show-services/show-services';
import { ConnectService } from '../api/connect.service';
import { Subscription } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  showService: ShowServices = new ShowServices();
  sendDataCheck: Subscription | undefined;

  services: any[] = [];
  array_service: any[] = [];
  amount_services: number = 0;

  ownchecks: any[] = [];
  array_ownchecks: any[] = [];

  array: any;

  constructor(
    private apiService: ConnectService,
    private toastController: ToastService
  ) { }

  async cleanArrays(){
    this.services = [];
    this.array_service = [];
  }

  async handleDendDataCheck(data: any){

    let check = data;
    //console.log(check);
    let length = check.length;
    //console.log(length);

    if(length === undefined || length === null){
      //console.log('one');
      this.array = [data];
    } else {
      //console.log('more than one: ', length);
      this.array = {data,length};
    }

    //console.log(this.array);

    this.sendDataCheck = this.apiService.sendDataCheck(this.array).subscribe({
      next: async (resp) => {
        //console.log(resp);
        this.toastController.showToastSuccess();
        this.sendDataCheck?.unsubscribe();
      },
      error: async (err) => {
        //console.log(err);
        this.sendDataCheck?.unsubscribe();
      }
    });
  }
}
