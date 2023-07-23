import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalCheckPageRoutingModule } from './personal-check-routing.module';

import { PersonalCheckPage } from './personal-check.page';
import { ShowPersonalchecksModule } from 'src/app/components/show-personalchecks/show-personalchecks.module';
import { AddOwnchecksModule } from 'src/app/components/add-ownchecks/add-ownchecks.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalCheckPageRoutingModule,
    ShowPersonalchecksModule,
    AddOwnchecksModule
  ],
  declarations: [PersonalCheckPage]
})
export class PersonalCheckPageModule {}
