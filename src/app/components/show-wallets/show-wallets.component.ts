import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/api/connect.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-wallets',
  templateUrl: './show-wallets.component.html',
  styleUrls: ['./show-wallets.component.scss'],
})
export class ShowWalletsComponent  implements OnInit {

  dataService: Subscription | undefined;

  showname_wallet: string = '';

  constructor(
    private apiService: ConnectService,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    //this.getAllWallets();
  }

  getAllWallets(){

    this.dataService = this.apiService.getAllWallets().subscribe({
      next: async (res) => {
        const response = await res;
        console.log(res);
        this.globalService.wallets = response.data;
        this.dataService?.unsubscribe();
      },
      error: async (err) => {
        console.log(err);
        this.dataService?.unsubscribe();
      }
    });
  }

  handleSelectedItemWallet(data: any){
    let item = data;
    //console.log(item);
    this.globalService.set_dataWallet = item;
    this.showname_wallet = item.wallet_name;
    this.globalService.setOpenModalWallet(true);
  }

}
