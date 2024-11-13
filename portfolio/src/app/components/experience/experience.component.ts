import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Systems Engineer (Front End Web Developer)',
      company: 'Infosys Limited',
      dates: 'Nov 2021 – Present',
      responsibilities: [
        'Developed and maintained web applications using Angular and JavaScript.',
        'Integrated RESTful APIs and third-party services.',
        'Conducted comprehensive software testing including unit, integration, and end-to-end.',
        'Collaborated with cross-functional teams.',
        'Optimized application performance through code reviews and refactoring.',
        'Implemented responsive design for compatibility across devices.',
        'Participated in Agile and Scrum processes.'
      ],
      expanded: false
    }
  ];

  toggleCollapse(index: number) {
    this.experiences[index].expanded = !this.experiences[index].expanded;
  }
}
