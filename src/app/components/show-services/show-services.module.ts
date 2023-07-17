import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShowServicesComponent } from './show-services.component';
import { ShowPersonalchecksModule } from '../show-personalchecks/show-personalchecks.module';
import { ItemServiceModule } from '../item-service/item-service.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPersonalchecksModule,
    ItemServiceModule
  ],
  declarations: [ShowServicesComponent],
  exports: [ShowServicesComponent]
})
export class ShowServicesModule {}
