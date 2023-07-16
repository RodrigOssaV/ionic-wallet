import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCheckPage } from './personal-check.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalCheckPageRoutingModule {}
