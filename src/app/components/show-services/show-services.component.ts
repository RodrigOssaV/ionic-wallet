import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { ShowServices } from './show-services';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.scss'],
})
export class ShowServicesComponent  implements OnInit {

  dataServices: Subscription | undefined ;
  showService: ShowServices = new ShowServices();

  //services: any[] = [];
  //array_service: any[] = [];

  constructor(
    private apiService: ConnectService,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    //this.getServices();
  }

  getAllServices(){
    //console.log('init fx getServices');
    this.dataServices = this.apiService.getAllServices().subscribe({
      next: async (res) => {
        const response = await res;
        //console.log(response);
        //this.services = response.data;

        await this.handleDataPushColor(response.data);
        this.dataServices!.unsubscribe();
      },
      error: (err) => {
        console.log(err);
        this.dataServices!.unsubscribe();
      }
    });
  }

  async handleDataPushColor(data: any){
    //console.log(data);
    await this.globalService.cleanArrays();
    this.globalService.array_service = data;

    let array = this.globalService.array_service;
    //this.array_service = data;

    array.map((service: any) => {

      //console.log(service);

      this.showService = new ShowServices();

      let type = service.service_type;

      if(type === 'internet'){
        this.showService.service_id = service.id;
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_type = service.service_type;
        this.showService.service_color = 'light';
        this.globalService.services.push(this.showService);
      } else if (type === 'luz'){
        this.showService.service_id = service.id;
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_type = service.service_type;
        this.showService.service_color = 'warning';
        this.globalService.services.push(this.showService);
      } else if (type === 'agua'){
        this.showService.service_id = service.id;
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_type = service.service_type;
        this.showService.service_color = 'primary';
        this.globalService.services.push(this.showService);
      } else if(type === 'gas'){
        this.showService.service_id = service.id;
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_type = service.service_type;
        this.showService.service_color = 'success';
        this.globalService.services.push(this.showService);
      }
    });
    //console.log(this.services);
  }
}
