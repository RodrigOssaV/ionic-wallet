import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowWalletsComponent } from 'src/app/components/show-wallets/show-wallets.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild(ShowWalletsComponent) ShowWalletsComponent!: any;

  constructor() { }

  ngOnInit() {
  }

  async ionViewDidEnter(){
    console.log("ionViewDidEnter")
    this.ShowWalletsComponent.getAllWallets();
  }

  async getAllWallets(event: any){
    //console.log('father to child function action');
    await this.ionViewDidEnter();
    this.ShowWalletsComponent.getAllWallets();
  }

}
