import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AddConsumptionComponent } from './add-consumption.component';
import { FormConsumptionModule } from '../form-consumption/form-consumption.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormConsumptionModule
  ],
  declarations: [AddConsumptionComponent],
  exports: [AddConsumptionComponent]
})
export class AddConsumptionModule {}
