import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-wallets',
  templateUrl: './add-wallets.component.html',
  styleUrls: ['./add-wallets.component.scss'],
})
export class AddWalletsComponent  implements OnInit {

  @Output() fx_getAllWallets = new EventEmitter<any>();

  isModalOpen = false; // set modal

  constructor() { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async runToFunction(){
    //console.log('this functions');
    this.fx_getAllWallets.emit();
  }

}
