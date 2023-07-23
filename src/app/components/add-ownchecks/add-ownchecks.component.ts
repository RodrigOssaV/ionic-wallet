import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-ownchecks',
  templateUrl: './add-ownchecks.component.html',
  styleUrls: ['./add-ownchecks.component.scss'],
})
export class AddOwnchecksComponent  implements OnInit {

  @Output() fx_getAllService = new EventEmitter<any>();

  isModalOpen = false; // set modal

  constructor(public globalService: GlobalService) { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.globalService.count_ownchecks = 0;
  }

  async runToFunction(){
    console.log('this functions');
    this.fx_getAllService.emit();
  }

}
