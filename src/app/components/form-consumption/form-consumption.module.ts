import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FormConsumptionComponent } from './form-consumption.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [FormConsumptionComponent],
  exports: [FormConsumptionComponent]
})
export class FormConsumptionModule {}
