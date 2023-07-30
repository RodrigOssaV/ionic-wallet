import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-consumptions',
  templateUrl: './show-consumptions.component.html',
  styleUrls: ['./show-consumptions.component.scss'],
})
export class ShowConsumptionsComponent  implements OnInit {

  dataConsumption: Subscription | undefined;

  array_consumptions: any[] = [];

  constructor(
    private apiConnection: ConnectService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.getAllConsumptions();
  }

  getAllConsumptions(){

    this.dataConsumption = this.apiConnection.getAllChecks().subscribe({
      next: async (res) => {
        //console.log(res);
        const response = await res;
        this.array_consumptions = response.data;
        //this.globalService.todos_consumos = response.data;
        console.log(this.array_consumptions);
        this.dataConsumption?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.dataConsumption?.unsubscribe();
      }
    });
  }

}
