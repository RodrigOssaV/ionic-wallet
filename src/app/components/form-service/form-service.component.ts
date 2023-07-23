import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { typesServices, Service } from "./data.form-wallet";
import { GlobalService } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss'],
})
export class FormServiceComponent  implements OnInit {

  @Output() fx_closeModal = new EventEmitter<any>();
  @Output() fx_getAll = new EventEmitter<any>();

  service: Service = new Service();

  all_types = typesServices;
  more_services: any[] = [];

  constructor(
    private globalService: GlobalService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  handleSelectedTypeService(event: any){
    let type_service = event.detail.value;
    //console.log(type_service);
    this.service.service_type = type_service;
  }

  async handleBtnSubmitOneService(){
    //console.log(this.service);
    if(this.more_services.length >= 1){
      console.log(`+ ${this.more_services.length}`);
      this.more_services.push(this.service);
      let length_more_checks = this.more_services.length;
      this.globalService.count_services = length_more_checks;
      this.globalService.count_services = 0;
      //console.log(this.more_services);
      await this.globalService.handleSendDataServicesToBack(this.more_services);
      await this.cleanInputs();
      this.fx_getAll.emit();

      this.fx_closeModal.emit();
    }else{
      this.more_services = [];
      this.globalService.count_services = 0;
      await this.globalService.handleSendDataServicesToBack(this.service);
      await this.cleanInputs();
      this.fx_getAll.emit();

      this.fx_closeModal.emit();
    }
    this.fx_getAll.emit();
  }

  async handleBtnSubmitMoreServices(){
    this.more_services.push(this.service);
    let length_more_services = this.more_services.length;
    this.globalService.count_services = length_more_services;
    //console.log(this.more_services);
    await this.cleanInputs();
  }

  async handleCloseModal(){
    if(this.more_services.length > 0){
      //console.log('clean all data');
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'La información se perderá.',
        message: 'Si cierra ahora, corre el riesgo de perder la información ya almacenada.',
        buttons: [
          {
            text: 'Cerrar',
            role: 'confirm',
            handler: async () => {
              await this.cleanInputs();
              this.fx_closeModal.emit();
            },
          },
          {
            text: 'Quedarme',
            role: 'cancel',
            handler: () => {},
          }
        ],
      });
      await alert.present();
    } else {

      this.fx_closeModal.emit();
    }
    //this.fx_closeModal.emit();
  }

  async cleanInputs(){
    this.service = new Service();
    //this.globalService.count_services = 0;
  }

}
