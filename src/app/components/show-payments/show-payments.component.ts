import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-payments',
  templateUrl: './show-payments.component.html',
  styleUrls: ['./show-payments.component.scss'],
})
export class ShowPaymentsComponent  implements OnInit {

  dataPayments: Subscription | undefined;

  array_payments: any[] = [];

  constructor(
    private apiConnection: ConnectService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.getAllPayments();
  }

  getAllPayments(){

    this.dataPayments = this.apiConnection.getAllDataPayments().subscribe({
      next: async (res) => {
        console.log(res);
        const response = await res;
        this.array_payments = response.data;
        this.globalService.todos_consumos = response.data;
        console.log(this.array_payments);
        this.dataPayments?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.dataPayments?.unsubscribe();
      }
    });
  }

}
