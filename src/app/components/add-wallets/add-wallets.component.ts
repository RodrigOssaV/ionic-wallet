import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wallets',
  templateUrl: './add-wallets.component.html',
  styleUrls: ['./add-wallets.component.scss'],
})
export class AddWalletsComponent  implements OnInit {

  isModalOpen = false; // set modal

  constructor() { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
