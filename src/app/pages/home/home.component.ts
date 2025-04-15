import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tabs = [
    {
      name: 'About Me',
      img: 'assets/bg/about.svg',
    },
    {
      name: 'Works',
      img: 'assets/bg/works.svg',
    },
    {
      name: 'Side Projects',
      img: 'assets/bg/side-projects.svg',
    },
    {
      name: 'Guest Book',
      img: 'assets/bg/guest-book.svg',
    },
    {
      name: 'The Daily Slab',
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

}
