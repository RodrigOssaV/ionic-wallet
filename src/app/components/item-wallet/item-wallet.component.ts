import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-item-wallet',
  templateUrl: './item-wallet.component.html',
  styleUrls: ['./item-wallet.component.scss'],
})
export class ItemWalletComponent  implements OnInit {

  constructor(private globalService: GlobalService) { }

  private wallet = this.globalService.set_dataWallet;

  async ngOnInit() {
    console.log(this.wallet);
    await this.handleDataToChart();
  }

  async drawChartInCanvas(data: any){
    const ctx = <HTMLCanvasElement>document.getElementById(`myChart`);
    new Chart(ctx, {
      type: 'doughnut',
      data
    });
  }

  async handleDataToChart(){

    const data = {
      labels: ['Cargado','Gastado',],
      datasets: [{
        label: ['Total dinero'],
        data: [300, 50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4,
        //cutout: 75,
        circumference: 180,
        rotation: -90,
        fill: false,
        borderWidth: 1
        //circumference: 1 * Math.PI,
        //cutoutPercentage: 75
      }],
    };
    await this.drawChartInCanvas(data);
  }

}
