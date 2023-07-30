import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { months, Check } from "./data.form-checks";
import { GlobalService } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-form-checks',
  templateUrl: './form-checks.component.html',
  styleUrls: ['./form-checks.component.scss'],
})
export class FormChecksComponent  implements OnInit {

  @Output() fx_closeModal = new EventEmitter<any>();

  constructor(
    private globalService: GlobalService,
    private alertController: AlertController
  ) { }

  private todos_consumos = this.globalService.todos_consumos;

  ngOnInit() {
    console.log(this.todos_consumos);
  }

  /* handleInputCLP(event: any) {
    this.valor = event.target.value;
    let valor_number = event.target.value;
    //console.log('init: ', this.valor);
    if (this.valor !== 0) {
      let toString = valor_number.toString();
      let valor = toString.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.show_value = '$' + valor;
      //console.log('change: ', valor);
      let final_valor = valor_number.replace(/[$.]/g, "");
      //console.log('final_valor: ', final_valor);
      this.check.check_value = final_valor;
    }
  } */







  async handleBtnSubmitOneService(){
    /* if(this.more_checks.length >= 1){
      //console.log('more services ', this.more_checks);
      //console.log('length_init: ', this.globalService.amount_services);
      this.more_checks.push({
        check_month: this.check.check_month,
        check_service: this.check.check_service,
        check_owncheck: this.check.check_owncheck,
        check_value: this.check.check_value
      });
      //console.log('length_more_checks: ', this.more_checks.length);
      let length_more_checks = this.more_checks.length;
      this.globalService.amount_services = length_more_checks;
      console.log('more_checks: ', this.more_checks);
      this.globalService.amount_services = 0;
      //await this.globalService.handleSendDataCheck(this.more_checks);
      await this.cleanInputs();
      this.fx_closeModal.emit();
    } else {
      console.log('check: ', this.check);

      this.more_checks = [];
      this.globalService.amount_services = 0;
      //await this.globalService.handleSendDataCheck(this.check);
      await this.cleanInputs();
      this.fx_closeModal.emit();
    } */
  }

  async handleBtnSubmitMoreServices(){
    //console.log('check: ', this.check);
    //console.log('more_check: ', this.more_checks);
    //console.log('length_init: ', this.globalService.amount_services);
    /* this.more_checks.push({
      check_month: this.check.check_month,
      check_service: this.check.check_service,
      check_owncheck: this.check.check_owncheck,
      check_value: this.check.check_value
    });
    //console.log('length_more_checks: ', this.more_checks.length);
    let length_more_checks = this.more_checks.length;
    this.globalService.amount_services = length_more_checks;
    await this.cleanInputs(); */
  }

  async handleCloseModal(){
    /* if(this.more_checks.length > 0){
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
    } else { */

      this.fx_closeModal.emit();
    /* } */
  }

  async cleanInputs(){
  }

}
