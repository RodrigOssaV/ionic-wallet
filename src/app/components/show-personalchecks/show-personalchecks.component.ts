import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { GlobalService } from 'src/app/services/global.service';
import { ShowPersonalChecks } from './show-personalChecks';

@Component({
  selector: 'app-show-personalchecks',
  templateUrl: './show-personalchecks.component.html',
  styleUrls: ['./show-personalchecks.component.scss'],
})
export class ShowPersonalchecksComponent  implements OnInit {

  dataOwnChecks: Subscription | undefined;
  showPersonalChecks: ShowPersonalChecks = new ShowPersonalChecks();

  array_personalChecks: any[] = [];

  constructor(
    private apiService: ConnectService,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    //this.getAllOwnChecks();
  }

  getAllOwnChecks(){
    console.log('getAllOwnChecks');
    this.dataOwnChecks = this.apiService.getAllOwnChecks().subscribe({
      next: async (res) => {
        const response = await res;
        //console.log(response);
        this.globalService.ownchecks = response.data;
        console.log('ownchecks: ', response.data);
        await this.handleDataToShowUser(response.data);
        this.dataOwnChecks?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.dataOwnChecks?.unsubscribe();
      }
    });

  }

  async handleDataToShowUser(data: any){
    //console.log(data);
    let array = data;
    this.array_personalChecks = [];

    array.map((item: any) => {
      console.log(item);
      this.showPersonalChecks = new ShowPersonalChecks();
      let createdAt = new Date(item.createdAt).toLocaleDateString('Es-es');
      this.showPersonalChecks.owncheck_name = item.owncheck_name;
      this.showPersonalChecks.data_createdAt = createdAt;
      this.showPersonalChecks.id_owncheck = item.id_owncheck;
      this.array_personalChecks.push(this.showPersonalChecks);
      //console.log(this.array_personalChecks);
    })
    //console.log(this.array_personalChecks);
    this.globalService.array_ownchecks = this.array_personalChecks;
  }

}
