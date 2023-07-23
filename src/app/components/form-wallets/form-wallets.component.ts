import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wallet,months } from "./data.form-wallet";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-form-wallets',
  templateUrl: './form-wallets.component.html',
  styleUrls: ['./form-wallets.component.scss'],
})
export class FormWalletsComponent  implements OnInit {

  @Output() fx_closeModal = new EventEmitter<any>();

  wallet: Wallet = new Wallet();

  all_months = months;
  month_name: string = '';

  show_value: any;
  valor: number = 0;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {}

  handleInputCLP(event: any) {
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
      this.wallet.wallet_amount = final_valor;
    }
  }

  handleSelectMonth(event: any){
    let month = event.detail.value;
    this.month_name = month;
  }

  async handleBtnSubmitOneService(){

    let date = new Date().getFullYear();
    //console.log(date);
    this.wallet.wallet_name = this.month_name + '-' + date;
    //console.log(this.wallet);
    let wallet = this.wallet;
    await this.globalService.handleSendDataWallet(wallet);
    this.fx_closeModal.emit();
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
    } else {

      this.fx_closeModal.emit();
    } */
    this.fx_closeModal.emit();
  }

}
