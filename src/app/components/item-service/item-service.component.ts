import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.scss'],
})
export class ItemServiceComponent  implements OnInit {

  data: any;
  setLabels: any[] = [];
  setData: any[] = [];

  constructor(
    public globalService: GlobalService
  ) { }

  async drawChartInCanvas(data: any) {
    //const ctx = document.getElementById('myChart');
    const ctx = <HTMLCanvasElement>document.getElementById(`myChart`);
    new Chart(ctx, {
      type: 'doughnut',
      data, /* {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: ['rgba(153, 102, 255, 0.2)',],
          borderColor: ['rgb(153, 102, 255)',],
        }]
      }, */
      /* options: {
        scales: { y: { beginAtZero: true } } //vertical
        //indexAxis: 'y', //horizontal
      } */
    });
  }

  private rows = this.globalService.data_Servicesmonthly;

  async ngOnInit() {
    await this.handleDataToChart();
  }

  async handleDataToChart(){
    //console.log(this.rows);
    let rows_to_map = this.rows;

    rows_to_map.map((row: any) => {
      //console.log(row);
      this.setLabels.push(row.check_month);
      this.setData.push(row.check_value);
    })
    //console.log(this.setLabels);
    //console.log(this.setData);
    const data = {
      labels: this.setLabels,
      datasets: [{
        //axis: 'y',
        //label: 'My First Dataset',
        data: this.setData,
        fill: false,
        /* backgroundColor: [
          //'rgba(255, 99, 132, 0.2)',
          //'rgba(255, 159, 64, 0.2)',
          //'rgba(255, 205, 86, 0.2)',
          //'rgba(75, 192, 192, 0.2)',
          //'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          //'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          //'rgb(255, 99, 132)',
          //'rgb(255, 159, 64)',
          //'rgb(255, 205, 86)',
          //'rgb(75, 192, 192)',
          //'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          //'rgb(201, 203, 207)'
        ], */
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    await this.drawChartInCanvas(data);
  }
}
