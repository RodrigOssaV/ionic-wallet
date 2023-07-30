import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowConsumptionsComponent } from 'src/app/components/show-consumptions/show-consumptions.component';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.page.html',
  styleUrls: ['./consumption.page.scss'],
})
export class ConsumptionPage implements OnInit {

  @ViewChild(ShowConsumptionsComponent) ShowConsumptionsComponent!: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.ShowConsumptionsComponent.getAllConsumptions();
  }

}
