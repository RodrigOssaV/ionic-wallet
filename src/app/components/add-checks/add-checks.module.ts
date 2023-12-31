import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AddChecksComponent } from './add-checks.component';
import { FormChecksModule } from '../form-checks/form-checks.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormChecksModule
  ],
  declarations: [AddChecksComponent],
  exports: [AddChecksComponent]
})
export class AddChecksModule {}
