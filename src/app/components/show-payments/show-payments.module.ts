import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgChartsModule, NgChartsConfiguration } from "ng2-charts";

import { ShowPaymentsComponent } from './show-payments.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule
  ],
  declarations: [ShowPaymentsComponent],
  exports: [ShowPaymentsComponent],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: true }}]
})
export class ShowPaymentsModule {}
