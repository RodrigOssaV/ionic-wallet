import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowPersonalchecksComponent } from 'src/app/components/show-personalchecks/show-personalchecks.component';

@Component({
  selector: 'app-personal-check',
  templateUrl: './personal-check.page.html',
  styleUrls: ['./personal-check.page.scss'],
})
export class PersonalCheckPage implements OnInit {

  @ViewChild(ShowPersonalchecksComponent) ShowPersonalChecksComponent!: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter service.page");
    this.ShowPersonalChecksComponent.getAllOwnChecks();
  }

  async getAllServices(event: any){
    console.log('father to child function action');
    await this.ShowPersonalChecksComponent.getAllOwnChecks();
  }

}
