import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Owncheck } from './data.form-owncheck';
import { GlobalService } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-owncheck',
  templateUrl: './form-owncheck.component.html',
  styleUrls: ['./form-owncheck.component.scss'],
})
export class FormOwncheckComponent  implements OnInit {

  @Output() fx_closeModal = new EventEmitter<any>();
  @Output() fx_getAllOwnChecks = new EventEmitter<any>();

  owncheck: Owncheck = new Owncheck();

  more_ownchecks: any[] = [];

  constructor(
    private globalService: GlobalService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  async handleBtnSubmitOneOwnCheck(){
    //console.log(this.service);
    if(this.more_ownchecks.length >= 1){
      console.log(`+ ${this.more_ownchecks.length}`);
      this.more_ownchecks.push(this.owncheck);
      let length_more_checks = this.more_ownchecks.length;
      this.globalService.count_ownchecks = length_more_checks;
      this.globalService.count_ownchecks = 0;
      //console.log(this.more_services);
      await this.globalService.handleSendDataOwnChecks(this.more_ownchecks);
      await this.cleanInputs();
      this.fx_getAllOwnChecks.emit();

      this.fx_closeModal.emit();
    }else{
      this.more_ownchecks = [];
      this.globalService.count_ownchecks = 0;
      await this.globalService.handleSendDataOwnChecks(this.owncheck);
      await this.cleanInputs();
      this.fx_getAllOwnChecks.emit();

      this.fx_closeModal.emit();
    }
    this.fx_getAllOwnChecks.emit();
  }

  async handleBtnSubmitMoreOwnCheck(){
    this.more_ownchecks.push(this.owncheck);
    let length_more_services = this.more_ownchecks.length;
    this.globalService.count_ownchecks = length_more_services;
    //console.log(this.more_services);
    await this.cleanInputs();
  }

  async handleCloseModal(){
    if(this.more_ownchecks.length > 0){
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
    this.owncheck = new Owncheck();
    //this.globalService.count_ownchecks = 0;
  }

}
