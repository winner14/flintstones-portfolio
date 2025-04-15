import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { AboutMeComponent } from "../../pages/about-me/about-me.component";
import { WorksComponent } from "../../pages/works/works.component";
import { SideProjectsComponent } from "../../pages/side-projects/side-projects.component";
import { GuestBookComponent } from "../../pages/guest-book/guest-book.component";
import { DailySlabComponent } from "../../pages/daily-slab/daily-slab.component";

@Component({
  selector: 'app-modal-layout',
  imports: [AboutMeComponent, WorksComponent, SideProjectsComponent, GuestBookComponent, DailySlabComponent],
  templateUrl: './modal-layout.component.html',
  styleUrl: './modal-layout.component.scss'
})
export class ModalLayoutComponent {
  _modalService = inject(ModalService);

}
