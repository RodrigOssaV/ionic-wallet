import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { AddChecksModule } from 'src/app/components/add-checks/add-checks.module';
import { ShowPaymentsModule } from 'src/app/components/show-payments/show-payments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPageRoutingModule,
    AddChecksModule,
    ShowPaymentsModule
  ],
  declarations: [CheckPage]
})
export class CheckPageModule {}
