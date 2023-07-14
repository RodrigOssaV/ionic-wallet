import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShowServicesComponent } from './show-services.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ShowServicesComponent],
  exports: [ShowServicesComponent]
})
export class ShowServicesModule {}
