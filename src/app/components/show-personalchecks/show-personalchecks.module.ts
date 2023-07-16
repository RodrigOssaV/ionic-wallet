import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShowPersonalchecksComponent } from './show-personalchecks.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ShowPersonalchecksComponent],
  exports: [ShowPersonalchecksComponent]
})
export class ShowPersonalchecksModule {}
