import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FormOwncheckComponent } from './form-owncheck.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [FormOwncheckComponent],
  exports: [FormOwncheckComponent]
})
export class FormOwncheckModule {}
