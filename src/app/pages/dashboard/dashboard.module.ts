import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { AddWalletsModule } from 'src/app/components/add-wallets/add-wallets.module';
import { ShowWalletsModule } from 'src/app/components/show-wallets/show-wallets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    AddWalletsModule,
    ShowWalletsModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
