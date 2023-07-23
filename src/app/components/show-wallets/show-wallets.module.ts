import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShowWalletsComponent } from './show-wallets.component';
import { ItemWalletModule } from '../item-wallet/item-wallet.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemWalletModule
  ],
  declarations: [ShowWalletsComponent],
  exports: [ShowWalletsComponent]
})
export class ShowWalletsModule {}
