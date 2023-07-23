import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AddWalletsComponent } from './add-wallets.component';
import { FormWalletsModule } from '../form-wallets/form-wallets.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormWalletsModule
  ],
  declarations: [AddWalletsComponent],
  exports: [AddWalletsComponent]
})
export class AddWalletsModule {}
