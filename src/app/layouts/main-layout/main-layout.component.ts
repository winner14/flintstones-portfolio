import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalLayoutComponent } from "../modal-layout/modal-layout.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, ModalLayoutComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
