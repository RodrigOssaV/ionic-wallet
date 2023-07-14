import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { ShowServices } from './show-services';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.scss'],
})
export class ShowServicesComponent  implements OnInit {

  dataServices: Subscription | undefined ;
  showService: ShowServices = new ShowServices();

  services: any[] = [];
  array_service: any[] = [];

  constructor(
    private apiService: ConnectService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(){
    //console.log('init fx getServices');
    this.dataServices = this.apiService.getAllServices().subscribe({
      next: async (res) => {
        const response = await res;
        //console.log(response);
        //this.services = response.data;
        this.array_service = [];
        this.services = [];
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
    this.array_service = data;

    this.array_service.map((service: any) => {

      this.showService = new ShowServices();

      let type = service.service_type;

      if(type === 'internet'){
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_color = 'light'
        this.services.push(this.showService);
      } else if (type === 'luz'){
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_color = 'warning'
        this.services.push(this.showService);
      } else if (type === 'agua'){
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_color = 'primary'
        this.services.push(this.showService);
      } else if(type === 'gas'){
        this.showService.service_name = service.service_name;
        this.showService.service_nro_client = service.service_nro_client;
        this.showService.service_color = 'success'
        this.services.push(this.showService);
      }
    });
    //console.log(this.services);
  }
}
