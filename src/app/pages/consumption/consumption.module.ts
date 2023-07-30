import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionPageRoutingModule } from './consumption-routing.module';

import { ConsumptionPage } from './consumption.page';
import { AddConsumptionModule } from 'src/app/components/add-consumption/add-consumption.module';
import { ShowConsumptionsModule } from 'src/app/components/show-consumptions/show-consumptions.module';
//import { ShowPaymentsModule } from 'src/app/components/show-payments/show-payments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionPageRoutingModule,
    AddConsumptionModule,
    ShowConsumptionsModule
    //ShowPaymentsModule
  ],
  declarations: [ConsumptionPage]
})
export class ConsumptionPageModule {}
