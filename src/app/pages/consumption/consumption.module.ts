import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionPageRoutingModule } from './consumption-routing.module';

import { ConsumptionPage } from './consumption.page';
import { AddConsumptionModule } from 'src/app/components/add-consumption/add-consumption.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionPageRoutingModule,
    AddConsumptionModule
  ],
  declarations: [ConsumptionPage]
})
export class ConsumptionPageModule {}
