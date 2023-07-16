import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-checks',
  templateUrl: './add-checks.component.html',
  styleUrls: ['./add-checks.component.scss'],
})
export class AddChecksComponent  implements OnInit {

  isModalOpen = false; // set modal

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
