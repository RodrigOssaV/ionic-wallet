import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AddOwnchecksComponent } from './add-ownchecks.component';
import { FormOwncheckModule } from '../form-owncheck/form-owncheck.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOwncheckModule
  ],
  declarations: [AddOwnchecksComponent],
  exports: [AddOwnchecksComponent]
})
export class AddOwnchecksModule {}
