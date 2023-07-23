import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowServicesComponent } from 'src/app/components/show-services/show-services.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  @ViewChild(ShowServicesComponent) ShowServicesComponent!: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    //console.log("ionViewDidEnter service.page");
    this.ShowServicesComponent.getAllServices();
  }

  getAllServices(event: any){
    //console.log('father to child function action');
    this.ShowServicesComponent.getAllServices();
  }

}
