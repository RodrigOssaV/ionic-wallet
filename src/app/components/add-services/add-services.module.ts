import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AddServicesComponent } from './add-services.component';
import { FormServiceModule } from '../form-service/form-service.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormServiceModule
  ],
  declarations: [AddServicesComponent],
  exports: [AddServicesComponent]
})
export class AddServicesModule {}
