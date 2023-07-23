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
  sendDataServiceByName: Subscription | undefined;
  sendDataWallet: Subscription | undefined;
  sendDataService: Subscription | undefined;

  wallets: any[] = [];
  set_dataWallet: any;

  services: any[] = []; //consumption
  array_service: any[] = []; //consumption
  amount_services: number = 0; //consumption

  count_services: number = 0; //services ex: agua, luz, gas

  ownchecks: any[] = [];
  array_ownchecks: any[] = [];

  array: any;
  array_services: any;

  isModalItemOpen = false;
  isModalWalletOpen = false;
  data_Servicesmonthly: any;

  show_nameModal: string = '';

  constructor(
    private apiService: ConnectService,
    private toastController: ToastService
  ) { }

  async cleanArrays(){
    this.services = [];
    this.array_service = [];
  }

  async handleSendDataWallet(data: any){
    console.log(data);

    this.sendDataWallet = this.apiService.sendDataWallet(data).subscribe({
      next: async (res) => {
        console.log(res);
        this.sendDataWallet?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.sendDataWallet?.unsubscribe();
      }
    });

  }

  async handleSendDataCheck(data: any){

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

  async handleSendDataServicesToBack(data: any){
    let services = data;
    console.log(services);
    let length = services.length;
    if(length === undefined || length === null){
      //console.log('one');
      //this.array_services = [data];
      await this.apiServiceOneService(services);
    } else {
      //console.log('more than one: ', length);
      this.array_services = {data};
      await this.apiServiceMoreServices(data);
    }
    //console.log(this.array_services);
  }

  setOpenModalItem(isOpen: boolean){
    this.isModalItemOpen = isOpen;
  }

  setOpenModalWallet(isOpen: boolean){
    this.isModalWalletOpen = isOpen;
  }

  async handleSendDataService(data: any) {
    //console.log(data);
    let to_search_name = data.service_name;
    this.show_nameModal = to_search_name;
    //console.log(to_search_name);
    let query= {
      to_search_name
    }
    //console.log(query);
    this.sendDataServiceByName = this.apiService.getDataServiceByName(query).subscribe({
      next: async (resp) => {
        //console.log(resp);
        const response = await resp;
        this.data_Servicesmonthly = response.data.rows;
        this.setOpenModalItem(true);
        this.sendDataServiceByName?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.sendDataServiceByName?.unsubscribe();
      }
    });
  }

  async apiServiceOneService(data: any){
    this.sendDataService = this.apiService.sendDataOneService(data).subscribe({
      next: async (res) => {
        console.log(res);
        this.sendDataService?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.sendDataService?.unsubscribe();
      }
    });
  }

  async apiServiceMoreServices(data: any){
    this.sendDataService = this.apiService.sendDataMoreServices(data).subscribe({
      next: async (res) => {
        console.log(res);
        this.sendDataService?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.sendDataService?.unsubscribe();
      }
    });
  }
}
