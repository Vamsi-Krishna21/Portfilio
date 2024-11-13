import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Focus 2.0',
      techStack: 'Angular, SCSS, HTML5, Angular Material, Bootstrap',
      description: [
        'Collaborated with Business Analysts to gather requirements.',
        'Engineered responsive user interfaces.',
        'Integrated GraphQL APIs.',
        'Recommended and implemented PrimeNG and NG-Toast libraries.'
      ]
    },
    {
      name: 'Odyssey',
      techStack: 'Angular, JavaScript, JSP, Manual Testing',
      description: [
        'Legacy application for US Automobiles Company.',
        'Seamlessly integrated REST APIs.',
        'Supported both Manual and Regression Testing.'
      ]
    },
    {
      name: 'Compass Modernization',
      techStack: 'Angular 17, CSS, HTML5, Bootstrap, NgRx, TypeScript',
      description: [
        'Modernized legacy PowerBuilder application.',
        'Created reusable UI components.',
        'Integrated real-time backend services.',
        'Implemented over 50 validations in a single screen.'
      ]
    }
  ];
}
