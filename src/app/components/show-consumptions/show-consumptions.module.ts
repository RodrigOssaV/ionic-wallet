import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgChartsModule, NgChartsConfiguration } from "ng2-charts";

import { ShowConsumptionsComponent } from './show-consumptions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule
  ],
  declarations: [ShowConsumptionsComponent],
  exports: [ShowConsumptionsComponent],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: true }}]
})
export class ShowConsumptionsModule {}
