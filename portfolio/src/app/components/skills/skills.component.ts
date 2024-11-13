import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { category: 'Frameworks', items: ['Angular'] },
    { category: 'Languages', items: ['JavaScript', 'TypeScript'] },
    { category: 'Databases', items: ['MySQL'] },
    { category: 'Testing', items: ['Jasmine', 'Karma', 'Manual Testing'] },
    { category: 'Libraries', items: ['NgRx', 'RxJS'] },
    { category: 'Styling', items: ['Angular Material', 'PrimeNG'] },
    { category: 'Tools', items: ['GitHub', 'Postman', 'Git', 'GraphQL Playground'] },
    { category: 'IDEs', items: ['Visual Studio Code', 'IntelliJ'] }
  ];
}
