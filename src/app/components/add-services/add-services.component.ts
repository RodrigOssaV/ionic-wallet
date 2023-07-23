import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss'],
})
export class AddServicesComponent  implements OnInit {

  @Output() fx_getAllService = new EventEmitter<any>();

  isModalOpen = false; // set modal

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
    //this.runToFunction();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.globalService.count_services = 0;
  }

  runToFunction(){
    //console.log('this functions');
    this.fx_getAllService.emit();
  }
}
