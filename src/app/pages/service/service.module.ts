import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';
import { ShowServicesModule } from 'src/app/components/show-services/show-services.module';
import { AddServicesModule } from 'src/app/components/add-services/add-services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule,
    ShowServicesModule,
    AddServicesModule
  ],
  declarations: [ServicePage]
})
export class ServicePageModule {}
