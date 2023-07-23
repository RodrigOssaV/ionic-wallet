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

  ionViewDidEnter(){
    //console.log("ionViewDidEnter")
    this.ShowWalletsComponent.getAllWallets();
  }

}
