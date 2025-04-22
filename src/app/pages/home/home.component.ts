import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  _modalService = inject(ModalService);

  tabs = [
    {
      page: 'about-me',
      img: 'assets/bg/about.svg',
    },
    {
      page: 'works',
      img: 'assets/bg/works.svg',
    },
    {
      page: 'side-projects',
      img: 'assets/bg/side-projects.svg',
    },
    {
      page: 'guest-book',
      img: 'assets/bg/guest-book.svg',
    },
    {
      page: 'daily-slab',
      img: 'assets/bg/daily-slab.svg',
    }
  ];

  workExpirences = [
    {
      role: 'Software Engineer',
      company: 'Turing, USA',
      date: '2023 - Present',
    },
    {
      role: 'Software Engineer',
      company: 'Turing, USA',
      date: '2023 - Present',
    },
    {
      role: 'Software Engineer',
      company: 'Turing, USA',
      date: '2023 - Present',
    },
  ];

  onTab(page: string) {
    this._modalService.toggleModal(page);
  }

}
