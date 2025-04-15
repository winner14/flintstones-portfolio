import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  modalOpened: boolean = false;
  modalPage: string = '';

  toggleModal(page: string) {
    this.modalOpened = !this.modalOpened;
    this.modalPage = page;
  }
}
