import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertComponent } from '../alert/alert.component';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, tipo: String){
    const bsModelRef: BsModalRef = this.bsModalService.show(AlertComponent)
    bsModelRef.content.type = tipo
    bsModelRef.content.message = message
  }

  showAlertVerde(message: string){
    this.showAlert(message, 'verde')
  }
  
}
