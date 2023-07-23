import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FormWalletsComponent } from './form-wallets.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [FormWalletsComponent],
  exports: [FormWalletsComponent]
})
export class FormWalletsModule {}
